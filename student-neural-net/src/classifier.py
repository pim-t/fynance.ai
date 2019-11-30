"""
Project: Accenture Banking Revolution Hackathon
Author: Fynance.AI
"""

# Imports
from __future__ import absolute_import, division, print_function
from tensorflow.python.client import timeline
from tensorflow import keras
import os
import tensorflow as tf


class Classifier:

    # Variables
    model = None
    run_options = None
    run_metadata = None

    batch_size = None
    epochs = None
    learning_rate = None

    def __init__(self, batch_size, epochs, learning_rate):

        self.batch_size = batch_size
        self.epochs = epochs
        self.learning_rate = learning_rate

        # Set run options
        self.run_options = tf.RunOptions(trace_level=tf.RunOptions.FULL_TRACE)
        self.run_metadata = tf.RunMetadata()

    def generate_neural_net(self, dense_size, num_classes, input_shape):

        # Layer Setup
        self.model = keras.Sequential([
            keras.layers.Dense(dense_size, input_shape=(input_shape,), activation=tf.nn.relu),
            keras.layers.Dropout(0.5),
            keras.layers.Dense(num_classes, activation='softmax'),
            ]
        )

        # Compile Model
        self.model.compile(loss=keras.losses.binary_crossentropy,
                optimizer=keras.optimizers.Adam(self.learning_rate),
            options=None,
            run_metadata=None,
            metrics=['accuracy'])

    def fit_model(self, Train_X, Train_Y):

        # Train & Validate Data
        self.model.fit(Train_X, Train_Y,
            batch_size=self.batch_size,
            epochs=self.epochs,
            verbose=1
        )
