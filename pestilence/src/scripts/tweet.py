from twitter import *
from stories import storyList, tweetList
import random
import time
import json

consumer_key = ['knJuFrT7HhPuZh7viMu5Jlnvq','rSWa8QRgQITcxAMqCzrkbUKkH','tNSQJf4hi2sxgZkgDvTk6jXEz','nHfHQ9jcU8GV5IhbMtu8j1IRU']
consumer_secret = ['ewYeB4hF42diotvKDD10hCdYDfANnyH73y3v4bevIHnG3KZHjE','QYmFSuIuGKGq3WbUxfbK5rkMuzdLTmSlpBGP9o93SBSimqCBZ6','SQU1m8nU9UnmXvZaAtBaiS5Mo8s2KeU1YYpOfa8m4U2Dow9Bn2','ecB98tq0gWBPEKEXlzUjci3Q4ARO9CnBqelbJkyJdvXSBowgga']
access_token = ['1243630624021172224-7Ikf0vxLbcnJB7DHo30IC2NYvGsIkV','1243631755388542976-zbCcnjt3s0icx69VQMIpYsWhyTQSCc','1243632274937008128-Tl0hGPSMUeVZYp0oUllyUdaVJe4B0c','1243632674536697856-UlU5vFSnU8i7BU2hm1NRhJxlKf6WDr']
access_token_secret = ['sC4JJbK4CZOgsADZJfO0x4THlXIDDmfsI2ua9zvhMRHcU','PyotynxXdQOEOtdhSN9UGtsWZwzPix4eUM6J1zeOxKzfi','RA2P7YbXcSSBdYR8aJmN0wH2cgsSN7BamiNGctVXiltyg','LN5pbzoVbzr3ATJaBBjYA1pI571kDzhGA2g0NKFHbQbLI']

appendNames = ["no.1: Carl Anderson","no.2: Timothy Steele","no.3: Emily Rappa", "no.4: Noelle King"]

def getNewStory(botID, exhausted, tweetlist, counter):
	R = random.randint(0,len(tweetlist)-1)
	if R in exhausted:
		if counter == len(exhausted):
			return("FAIL")
		else:
			return(getNewStory(botID, exhausted, tweetlist, counter+1))
	else:
		exhausted.append(R)
		return(tweetlist[R])
	# return("Hello!" + str(botID))

#create authentification instance
# for botID in range(4):
# 	t = Twitter(auth=OAuth(access_token[botID], access_token_secret[botID],consumer_key[botID], consumer_secret[botID]))
# 	statusUpdate = "LAhacks tweepyAPI constant delay (300) status update " + appendNames[botID]
# 	t.statuses.update(status=statusUpdate)
# 	time.sleep(300)
exhausted = [ [], [], [], [] ]
print(tweetList)

while(True):
	time.sleep(1)
	botID = random.randint(0,3)
	statusUpdate = getNewStory(botID, exhausted[botID], tweetList, 0)
	if statusUpdate == "FAIL":
		print("all done! closing!")
		exit(1)
	print(statusUpdate)
# for i in range(len(storyList)):
# 	print(storyList[i])