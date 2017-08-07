import sys 
import RPi.GPIO as GPIO 
from time import sleep 
import Adafruit_DHT 
import urllib2 

def getSensorData(): 
   RH, T = Adafruit_DHT.read_retry(Adafruit_DHT.DHT22, 17) 
   return (str(RH), str(T)) 
def main(): 
    RH, T = getSensorData() 
    print RH
    print T
           
# call main 
if __name__ == '__main__': 
   main()  
