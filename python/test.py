#!/usr/bin/env python3
# 在第一行加上上面特殊的注释可以直接运行.py文件, chmod a+x ./test.py 给其执行权限

# -*- coding: utf-8 -*
# coding = utf-8
# 中文

print("Hello Machine Learning")

age = 20 # int(input('请输入您的年龄:'))
if age >= 18:
    print('已成年')
else:
    print('未成年')

print(ord('天'))
print(chr(25991))

print('中文'.encode('utf-8'))

print(len('中文'))

print('%2d-%05d' % (3, 1))

languages = ['python', 'javascript', 'php']
print(languages[-2])

languages.append('c')

languages.insert(1, 'java')

print(languages)

sum = 0
for x in list(range(5)):
    sum = sum + x
print(sum)

xum = 0
for x in range(101):
    xum = xum + x
print(xum)


def my_abs(x):
     if not isinstance(x, (int, float)):
         raise TypeError('错误参数类型')

my_abs(123)


import math

def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny

r = x, y = move(100, 100, 60, math.pi / 6)
print(x, y, r)
