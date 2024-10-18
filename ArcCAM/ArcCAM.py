#!/usr/bin/python3

import shutil

print("Hello World")

import tkinter as tk

# Create the main application window
root = tk.Tk()

# Set the window title
root.title("Simple Tkinter App")

# Create a label
label = tk.Label(root, text="Hello, Tkinter!")
label.pack(pady=10)  # Add padding to the label

# Function to handle button click
def on_button_click():
    label.config(text="Button Clicked!")

# Create a button and attach the click event to the function
button = tk.Button(root, text="Click Me", command=on_button_click)
button.pack(pady=10)

# Start the Tkinter event loop
root.mainloop()
