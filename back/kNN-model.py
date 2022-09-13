import pickle
import csv
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn import metrics
from sklearn.metrics import plot_confusion_matrix
import pandas as pd

# Importamos datos de entrenamiento
dataset = pd.read_csv('train.csv')

print(print(100*dataset.isnull().mean()))

# Importamos datos de test
test = pd.read_csv('test.csv')

## Asiganmos datos de prueba
X_test = test.drop(['PassengerId','Name','Cabin','Ticket','Fare', 'Parch', 'SibSp'], axis = 1)


## Visualizar datos
print(dataset.info(),'\n')


# Preprocesamiento de datos
## Para las X, se utilizara las variables 'P-class', 'Sex', 'Age' y 'Embarked'. Nos quedamos con Name para llenar las edades faltantes.
X = dataset.drop(['PassengerId','Cabin','Ticket','Fare', 'Parch', 'SibSp', 'Survived'], axis = 1)

## Asiganmos datos de prueba
X_test = test.drop(['PassengerId','Cabin','Ticket','Fare', 'Parch', 'SibSp'], axis = 1)

## La y es la variable 'Survivied'
y = dataset['Survived']

## Cambiamos 'Sex' datos categoricos a numericos.
labelEncoder_X = LabelEncoder()
### Train
X.Sex = labelEncoder_X.fit_transform(X.Sex)
### Test
X_test.Sex = labelEncoder_X.fit_transform(X_test.Sex)

## Llenamos datos faltantes en 'Embarked' con moda
moda = X['Embarked'].value_counts().idxmax()
### Train
X['Embarked'].fillna(moda, inplace = True)
### Test
X_test['Embarked'].fillna(moda, inplace = True)

## Cambiamos 'Embarked' datos categoricos a numericos
### Train
X.Embarked = labelEncoder_X.fit_transform(X.Embarked)
### Test
X_test.Embarked = labelEncoder_X.fit_transform(X_test.Embarked)

## Sacamos el titulo del 'Name' y llenamos 'Age' con la media segun el respectivo titulo
### Train
got_train = dataset.Name.str.split(',').str[1]
X.iloc[:,1] = pd.DataFrame(got_train).Name.str.split('\s+').str[1]
### Test
got_test = test.Name.str.split(',').str[1]
X_test.iloc[:,1] = pd.DataFrame(got_test).Name.str.split('\s+').str[1]

### Sacamos media de 'Age' por titulo
#### Train
mean_age = []
mean_age.append(list(set(X.Name)))
mean_age.append(X.groupby('Name').Age.mean())
#### Test
mean_age_test = []
mean_age_test.append(list(set(X_test.Name)))
mean_age_test.append(X_test.groupby('Name').Age.mean())

### Llenamos datos faltantes de 'Age' con la media respectiva al titulo
#### Train
n_titles = len(mean_age[1])

for i in range(0, dataset.shape[0]):
    if np.isnan(X.Age[i]) == True:
        for j in range(0, n_titles):
            if X.Name[i] == mean_age[0][j]:
                X.Age[i] = mean_age[1][j]

#### Test
n_titles_test = len(mean_age_test[1])

for i in range(0, test.shape[0]):
    if np.isnan(X_test.Age[i]) == True:
        for j in range(0, n_titles_test):
            if X_test.Name[i] == mean_age_test[0][j]:
                X_test.Age[i] = mean_age_test[1][j]

mean = round(X_test["Age"].mean())
X_test['Age'].fillna(mean, inplace = True)


### Borramos 'Name' de las X
#### Train
X = X.drop(['Name'], axis = 1)
#### Test
X_test = X_test.drop(['Name'], axis = 1)

## Comprobamos
print('Datos limpios\n', X.head(10),'\n')
print("Media de datos faltantes: ",np.mean(100*X.isnull().mean().values), '\n')


# Entrenar modelo kNN
## Dividimos dataset para train y test local
X_train, X_test_ds, y_train, y_test_ds = train_test_split(X, y, test_size = 0.2, random_state = 0)

classifier = KNeighborsClassifier(n_neighbors = 9, weights = 'distance')
classifier.fit(X_train,y_train)


# Predecir
## Kaggle
y_kaggle = classifier.predict(X_test)
## Local
y_pred = classifier.predict(X_test_ds)

# Accuracy
print('Accuracy: ', accuracy_score(y_test_ds, y_pred))

# ROC y AUC
metrics.plot_roc_curve(classifier, X_test_ds, y_test_ds) 
plt.show()

# Matriz de confusion
plot_confusion_matrix(classifier, X_test_ds, y_test_ds)
plt.show()  

# CSV
output = pd.DataFrame({'PassengerId': test.PassengerId, 'Survived': y_kaggle})
output.to_csv('submission-titanic.csv', index=False)

pickle.dump(classifier, open('kNN-model.pkl', 'wb'))
model = pickle.load(open('kNN-model.pkl', 'rb'))