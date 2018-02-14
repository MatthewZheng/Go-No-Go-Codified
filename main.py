#!/usr/bin/env python
#Author: Matthew Zheng

import math
from collections import Counter

def makeMatrix(iter1, iter2):
    count1 = Counter(iter1)
    count2 = Counter(iter2)
    uni = set(count1.keys()).union(set(count2.keys()))
    v1 = [count1[j] for j in uni]
    v2 = [count2[j] for j in uni]
    return v1, v2

def cosSim(v1, v2):
    pass



