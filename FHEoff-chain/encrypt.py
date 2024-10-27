import Pyfhel
import random

HE = Pyfhel.Pyfhel()
HE.contextGen(p=65537)
HE.keyGen()


names=["We","I","They","He","She"]
verbs=["was","is","were"]
nouns=["playing a game","watching television","talking","dancing","speaking"]

    a=(random.choices(names))
    b=(random.choices(verbs))
    c=(random.choices(nouns))
    clue=a+b+c

#clue = "This is a secret"
clue_enc = HE.encrypt(clue.encode())
