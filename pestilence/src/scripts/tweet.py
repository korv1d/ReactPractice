from twitter import *
import random

#bearer token (tim)
#AAAAAAAAAAAAAAAAAAAAACM7DQEAAAAApr2BEL4pEJDImOT5Re5XDXvU4R0%3D2ZVLnHfqQL42KSRXwHOijXaiRNY57NXbIrrvDLK6SfSSrObHv3
consumer_key = ['knJuFrT7HhPuZh7viMu5Jlnvq','zOwB7q2qTI2zJpgocDOuDIwWw','tNSQJf4hi2sxgZkgDvTk6jXEz']
consumer_secret = ['ewYeB4hF42diotvKDD10hCdYDfANnyH73y3v4bevIHnG3KZHjE','9w3HUi8BJaUixaKqClqERZkEiKolhiduWUNIcfqWxjlBiZ64rp','SQU1m8nU9UnmXvZaAtBaiS5Mo8s2KeU1YYpOfa8m4U2Dow9Bn2']
access_token = ['1243630624021172224-7Ikf0vxLbcnJB7DHo30IC2NYvGsIkV','1243631755388542976-IjfNZlosGjaOSB9vvB3zM16EMRNRpg','1243632274937008128-Tl0hGPSMUeVZYp0oUllyUdaVJe4B0c']
access_token_secret = ['sC4JJbK4CZOgsADZJfO0x4THlXIDDmfsI2ua9zvhMRHcU','KnSHKY9Qj5kI9BLZk8gWYa36ivb7d3sTutpVg1xfqc9Lt','RA2P7YbXcSSBdYR8aJmN0wH2cgsSN7BamiNGctVXiltyg']

#create authentification instance
# def OAuth(botID):
# 	try:
# 		print(consumer_key[botID])
# 		auth = tweepy.OAuthHandler(consumer_key[botID], consumer_secret[botID])
# 		auth.set_access_token(access_token[botID], access_token_secret[botID])
# 		print(consumer_secret[botID])
# 		print(access_token[botID])
# 		print(access_token_secret[botID])

# 	except Exception as e:
# 		return None


#every 15 minutes
# R = random.randint(0,2)+1
# print(R)
botID = 1
appendNames = ["no.1: Carl Anderson","no.2: Timothy Steele","no.3: Emily Rappa"]
statusUpdate = "LAhacks tweepyAPI initialization test " + appendNames[botID]

t = Twitter(auth=OAuth(access_token[botID], access_token_secret[botID],consumer_key[botID], consumer_secret[botID]))
t.statuses.update(status=statusUpdate)



# oauth = OAuth(0)
# api = tweepy.API(oauth)

# api.update_status(status = "LAhacks tweepy initialization test no.1:Carl Anderson")
# print("tweet posted")
# #####
# oauth = OAuth(1)
# api = tweepy.API(oauth)

# api.update_status("LAhacks tweepy initialization test no.2 Timothy Steele")
# print("tweet posted")
# #####
# oauth = OAuth(2)
# api = tweepy.API(oauth)

# api.update_status("LAhacks tweepy initialization test no.3 Emily Rappa")
# print("tweet posted")