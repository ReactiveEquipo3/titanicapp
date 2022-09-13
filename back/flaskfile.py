import numpy as np
import pickle
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
kNN_model = pickle.load(open('kNN-model.pkl', 'rb'))
RandomForest_model = pickle.load(open('RandomForest-model.pkl', 'rb'))

@app.route('/')
def home():
  return 'HOME'

@app.route('/kNN',methods=['POST'])
def kNNPredict():
  resp = request.get_json()
  val1 = resp['Pclass']
  val2 = resp['Sex']
  val3 = resp['Age']
  val4 = resp['Embarked']
  features = [val1, val2, val3, val4]
  final_features = np.array(features).reshape(1,-1)
  prediction = kNN_model.predict(final_features)
  print(prediction)
  return str(prediction)

@app.route('/RandomForest',methods=['POST'])
def RandomForestPredict():
  resp = request.get_json()
  val1 = resp['Pclass']
  val2 = resp['Sex']
  val3 = resp['Age']
  val4 = resp['Embarked']
  features = [val1, val2, val3, val4]
  final_features = np.array(features).reshape(1,-1)
  prediction = RandomForest_model.predict(final_features)
  print(prediction)
  return str(prediction)

if __name__ == "__main__":
  app.run('192.168.31.242')