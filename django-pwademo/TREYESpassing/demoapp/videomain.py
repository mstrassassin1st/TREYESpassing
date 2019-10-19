import os
import sys
import cv2
import numpy as np
import string
import random
from .HumanDetector import HumanDetector

def process():
    base_dir = os.path.dirname(__file__)
    hd = HumanDetector(os.path.join(base_dir +'/models/best.h5'), "GSOC")
    detected = hd.detect(os.path.join(base_dir + '/static/video/' + 'group_walking' + '.mp4'))
    return detected