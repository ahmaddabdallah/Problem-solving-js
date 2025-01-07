import pyautogui
from time import sleep

message = input("Enter your message : ")
num_message = int(input("Enter your number of message : "))
time_message = float(input("Enter your time of message : "))

sleep(5)

for num in range(num_message + 1) :
    pyautogui.typewrite(message)
    sleep(time_message)
    pyautogui.press("Enter")
    sleep(time_message)