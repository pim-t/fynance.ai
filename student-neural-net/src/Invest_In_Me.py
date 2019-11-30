"""
Project: Accenture Banking Revolution Hackathon
Author: Fynance.AI
"""

# Imports
from __future__ import absolute_import, division, print_function
import tensorflow as tf
import time
from tensorflow import keras
from keras.models import load_model
import os
import numpy
import classifier
import csv

'''
Controls
'''
Train_Model = False
Load_Model = True


'''
Import Data
'''
dataset = numpy.loadtxt("data/test_data_3.csv", delimiter=",")

# Training Data
Train_X = dataset[0:45, 0:7]
Train_Y = dataset[0:45, 7:12]

# Validation Data
Test_X = dataset[45:51, 0:7]
Test_Y = dataset[45:51, 7:12]


"""
Define Model
"""
# Define Model Variables
input_shape = 7
num_classes = 3
dense_size = 12
batch_size = 5
epochs = 500
learning_rate = 0.01

# Build Model
model = classifier.Classifier(batch_size, epochs, learning_rate)


'''
Load Model
'''
if Load_Model:

    # load model
    try:
        model = tf.keras.models.load_model('model.h5')
    except:
        print("No Existing Model")
    else:

        # summarize model.
        model.summary()


'''
Generate Model
'''
if not Load_Model:
    # Generate Neural Network Model
    model.generate_neural_net(dense_size, num_classes, input_shape)


"""
Train Model
"""
if Train_Model:

    # Fit Model
    model.fit_model(Train_X, Train_Y)

    # Evaluate Model
    scores = model.evaluate(Train_X, Train_Y, verbose=0)
    print("%s: %.2f%%" % (model.metrics_names[1], scores[1] * 100))

    # Save Model & Architecture
    model.save("model.h5")
    print("Saved model to disk")


'''
Predict
'''
if not Train_Model:
    # Predict Output
    Predict_Y = model.predict_classes(Test_X)

    with open('Output.csv', 'w') as outputFile:
        writer = csv.writer(outputFile)

        # show the inputs and predicted outputs
        for i in range(len(Test_X)):
            print("X=%s, Predicted=%s, Actual=%s" % (Test_X[i], Predict_Y[i], Test_Y[i]))
            writer.writerow([Test_X[i, 0], Test_X[i, 1], Test_X[i, 2], Test_X[i, 3], Test_X[i, 4],
                            Test_X[i, 5], Test_X[i, 6], Predict_Y[i]])

    outputFile.close()
