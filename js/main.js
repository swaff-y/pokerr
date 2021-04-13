// the test array
const array = [["9C","9D","8D","7C","3C","2S","KD","TH","9H","8H"],
["6C","5H","AS","4H","7S","2S","KD","7H","2C","AC"],
["5H","JS","AD","8H","TC","KS","QC","9C","5D","6H"],
["6C","8S","3S","TS","4S","AH","6S","KS","8D","5D"],
["AS","TC","8C","3H","3C","AD","5H","8D","5C","2H"],
["3S","AC","AH","AS","5H","7S","QC","8S","TC","4C"],
["TH","6D","7H","5S","8S","QS","TD","3S","6C","9H"],
["8C","JH","KD","3S","4D","2S","2C","8S","JS","4H"],
["JS","9S","6S","JD","5H","9D","KS","8H","5S","4D"],
["JC","TC","KC","3C","3D","2H","7S","5H","QH","4D"],
["7D","5H","4H","TC","3S","5S","KC","6H","6C","QS"],
["AC","2D","7D","3C","TC","3S","JS","4H","4D","JD"],
["7S","8S","AC","KD","AH","5D","TC","6D","7H","3S"],
["JS","5D","QC","5H","5S","2S","8C","JC","KC","KH"],
["2D","3H","TC","8C","QS","6C","KS","2S","AD","4C"],
["QS","7H","4H","AH","JS","3H","JH","AD","8D","3C"],
["2H","KD","6C","TC","TD","5H","4D","3H","2C","AS"],
["QS","3C","5H","QH","8S","7H","AS","JD","6S","7S"],
["QC","KC","QH","7H","QS","9C","8D","TD","3H","TC"],
["TS","9S","TC","QD","JH","6S","2C","5H","TD","8D"],
["5D","JC","5S","9C","3D","AC","JS","7C","KC","AD"],
["3S","TD","9D","8H","AD","2H","2D","6H","9S","KH"],
["6D","AH","5S","QH","6H","QC","5D","7S","TD","6C"],
["TH","8H","7S","QS","7D","5S","6C","9S","8D","2H"],
["8H","7D","QH","3H","QD","3S","4H","2D","7H","TD"],
["9H","4D","8S","7S","JD","AD","TH","2D","8C","AH"],
["7S","KC","8D","4D","JH","QS","7D","3D","TH","9S"],
["3C","9C","6H","7D","QS","AS","AC","TC","2D","3D"],
["JS","6H","TS","KC","QC","QS","TH","8C","AD","AH"],
["6S","5H","4D","TC","8H","5S","TD","KH","3S","AH"],
["2D","9H","JS","KD","7D","6S","TH","5C","5S","6H"],
["5S","6D","2C","TD","5D","6S","AD","4H","3D","JD"],
["QC","2C","QS","AS","8C","7C","6D","9D","3H","6C"],
["3D","4D","7H","TD","9C","QH","8H","5C","KS","3S"],
["JC","AH","QH","4S","TD","2D","7H","8S","6S","JH"],
["7C","9S","3H","KH","TS","5S","AH","2S","7H","2C"],
["2H","9D","9H","6H","KC","3D","KH","TC","9S","JC"],
["TS","6C","2C","3D","9H","2H","AC","9D","4S","QS"],
["AC","8D","8S","7C","2D","JS","2S","QH","3C","6S"],
["7C","6D","TD","3C","QH","9D","2H","8C","6S","TC"],
["2C","JH","QD","8D","TH","6H","QC","6C","KC","4D"],
["7D","JD","6C","QD","5H","KS","3H","9S","2C","TD"],
["8D","5S","7S","TC","6D","AS","9S","4C","TD","KS"],
["3H","5D","7C","5S","QS","KD","6S","2S","7D","QD"],
["QS","2H","AC","6H","KS","AD","7D","KH","QH","TC"],
["7C","5C","9H","QS","2S","TD","4H","TH","7D","6S"],
["3H","AS","4H","JD","3S","JS","7H","7S","3C","6C"],
["QH","AD","AH","QC","5D","JC","TC","QD","9C","6S"],
["KD","2S","TD","3D","4C","JC","8C","9C","7C","QS"],
["4C","9D","5H","8C","7D","QS","5C","TH","6D","8S"],
["8S","JC","3S","JS","TC","KC","5S","2H","AH","9S"],
["TH","QC","8D","6H","TS","JC","KH","4S","2H","AC"],
["8S","TH","3C","2H","3S","7H","KS","QH","3H","6C"],
["2S","3C","AD","4H","JC","9S","7D","KS","8S","KH"],
["AS","8S","TS","TH","4S","5H","QS","AH","JS","5D"],
["JH","9D","KD","5H","QD","6D","TH","9C","6C","4C"],
["KD","5S","9S","5C","3S","8D","TC","AC","7H","KS"],
["5H","2H","3S","JC","QS","9C","4S","AS","5C","QC"],
["7H","AH","4H","3D","JH","5D","6H","QD","8S","5H"],
["9C","2D","KS","4H","6H","7D","JD","TD","KH","5H"],
["JC","QD","JS","2C","6C","9H","6S","6D","9D","KH"],
["KH","AS","3D","3S","2C","6D","JD","KC","7H","9D"],
["KH","7S","3D","4H","4D","4S","AH","9C","2H","7D"],
["5C","6H","8S","KH","4D","TD","6C","2C","TC","KS"],
["QH","7D","JS","2H","9S","AD","8H","2D","5C","4C"],
["JH","4S","5S","8C","AH","5C","8D","3H","7S","QH"],
["7H","AC","KS","KH","JH","9H","AD","6D","2D","JS"],
["2C","9C","AD","TH","8C","7H","5D","8H","8D","QS"],
["9H","7S","5D","8C","5H","8S","6H","6D","KS","3S"],
["3S","AD","4C","QC","6D","TD","4D","3H","KD","8C"],
["4C","7C","JS","AH","KS","3D","TH","2S","QH","6C"],
["JD","TD","7C","QS","8H","JC","JS","AS","9H","3H"],
["2H","TH","QH","3H","2D","JH","9S","8H","5S","QC"],
["3D","8S","4S","6C","QC","5C","JC","3S","AS","KS"],
["5C","5S","9C","TH","9D","7C","2S","KD","TC","KS"],
["5D","7S","KD","5S","AH","TH","9S","8C","8H","4H"],
["8H","5H","TD","6H","9D","6C","2S","5C","2D","TH"],
["QC","4S","2S","8C","3H","TH","JD","TS","5D","3S"],
["8C","JH","JC","KD","5H","TC","JD","7S","KH","4D"],
["KD","5C","JD","6H","QH","9H","8C","QD","2H","7C"],
["9D","7S","KH","6D","KS","3H","9S","4C","KD","2D"],
["JD","3C","4H","KC","TD","KD","JH","8H","2H","9H"],
["5D","TD","7C","4S","3S","8S","AC","5S","6H","KC"],
["JC","8D","6H","JH","7S","AC","3D","9D","5S","QC"],
["8C","AD","8D","5H","3C","QD","TH","6S","6D","JD"],
["5C","JC","TH","9C","7C","KH","3C","QC","2C","AC"],
["4C","JH","6D","2C","JC","8D","4D","AS","QD","TS"],
["AC","TD","QH","6S","3H","2D","2C","AD","5C","JS"],
["5C","QC","2H","6C","TC","6D","JD","8S","KS","QS"],
["8H","6C","3C","9D","2C","8S","4D","2D","7S","QH"],
["AS","8D","2H","2C","4H","AH","3S","4C","5S","4S"],
["TS","5C","QD","4H","4S","6C","QH","3D","2S","2C"],
["5D","9D","5H","5S","7S","6D","AS","4H","QH","6H"],
["2S","2H","TH","JH","9S","JC","QD","AC","QH","9H"],
["2H","KC","QS","5C","TD","7S","JC","QC","QH","2S"],
["5D","9S","7C","8S","KC","JS","TS","3H","5H","2D"],
["4S","3C","4C","8H","JH","8C","QC","QH","AD","5H"],
["QS","8D","AS","7S","AH","7D","4S","4C","3C","JH"],
["8D","AH","5C","QH","9C","9H","7H","JS","6C","3S"],
["2C","QS","JC","6S","3D","QD","2S","QC","6C","8D"],
["6D","QH","JD","8C","JS","AC","8S","9C","AD","8D"],
["4H","6H","8H","3H","7D","AS","TD","7H","9H","2S"],
["6C","KH","7H","3H","2D","6S","4S","8S","8C","AC"],
["QC","JH","2H","7D","4S","9S","2D","AS","3S","7C"],
["AS","4S","AH","3H","9H","7H","TC","2D","KS","6H"],
["7D","7H","9C","4D","JD","QH","3D","6D","JC","6C"],
["QH","AD","TS","9S","7S","8D","TC","4D","QC","KH"],
["3H","6D","6S","TC","8H","4C","QC","8D","7D","3S"],
["7D","5S","TC","QC","KH","TS","2H","6C","QD","7S"],
["3D","9C","3S","QD","4D","2D","KH","TD","6C","QS"],
["3C","6D","7H","JH","4H","QD","KC","4D","9D","TC"],
["5D","8C","AS","KS","QC","QD","8H","JS","9S","7S"],
["2S","9H","7C","JD","AC","8H","KD","5S","QS","JC"],
["6C","3C","5H","9S","AD","KC","9H","4D","JS","5C"],
["6D","2C","AD","JD","KD","5D","TD","5C","TC","9H"],
["AD","7D","TH","4D","7C","KH","8C","2H","3S","9S"],
["4C","QC","9H","9S","TS","KH","KD","JS","QS","3H"],
["2S","3D","JS","8S","TD","JD","2C","7S","3C","9C"],
["AC","JD","QD","2H","TS","JC","2S","KC","7S","7H"],
["KD","8H","5C","8C","3S","JC","9C","AC","4H","7H"],
["2D","QD","QC","TC","6D","QS","5S","AD","9H","4C"],
["JS","QH","3D","AS","6H","TD","4D","5D","2H","JH"],
["JD","QH","3S","QS","5C","4S","6D","5D","TS","KC"],
["KC","QD","6D","2D","7C","4S","JS","6H","TH","3H"],
["TC","3H","7H","9S","KD","6C","8H","3S","AD","AH"],
["5D","4H","KH","3C","7H","2H","8H","AH","KS","QH"],
["TD","3D","KC","8C","5H","JC","TS","JH","KS","2H"],
["4H","7C","4S","8D","8C","3D","JH","3H","5D","AS"],
["6C","9H","8S","3S","2S","8D","TS","QS","7S","4C"],
["AD","KS","4D","5D","2C","QD","KH","AC","7D","6D"],
["8C","3C","8D","QD","9C","6D","KC","4C","2H","AC"],
["5D","JD","JH","9S","JC","5H","6C","5C","AD","2D"],
["5H","3C","9H","2H","AS","6C","QS","4D","JS","KD"],
["4S","AH","JC","QS","2D","9C","KH","3S","JD","9D"],
["4H","5H","JC","3S","4S","QC","9S","AD","3D","6S"],
["3D","2C","8D","JC","KH","9C","9S","2D","7C","2S"],
["KH","TH","3H","AD","4C","3D","5H","6D","4H","9H"],
["7H","3C","8H","2C","8S","JC","5S","AD","5H","JD"],
["9D","QS","9H","8C","JD","5D","2D","TH","JC","QH"],
["QH","7H","TD","4D","JC","JD","7C","2D","TS","7D"],
["KH","5H","2C","8D","7S","TS","5S","TD","6H","6D"],
["QC","KC","3H","TD","AH","4S","2H","AS","3S","JS"],
["3C","TH","JD","5H","TS","5S","QS","6H","3S","KC"],
["JC","7H","AC","2C","2D","9C","7S","JD","6H","QH"],
["KH","7H","KC","KS","6H","2S","3H","TC","9H","2D"],
["4C","TC","3H","KS","JC","QD","9H","7D","TD","9D"],
["3D","AD","5H","QH","KS","2H","9C","AS","7S","TC"],
["TC","2S","7S","5D","5C","QS","KH","7D","4C","TD"],
["TC","5D","JD","QD","8D","KC","8H","8C","TS","QC"],
["4C","9H","9C","5D","TC","QH","AH","AS","9D","KS"],
["7C","5D","TS","2D","JC","8S","7S","TD","4D","4H"],
["4S","5D","9C","QD","TH","8H","AH","8S","6H","3H"],
["5D","6H","4D","5S","TH","7S","2H","AS","4S","TS"],
["9S","2S","9H","3S","QS","6H","JD","AC","6C","QD"],
["9S","AH","5D","9H","4C","JH","3S","QH","KC","4D"],
["JH","JC","AH","QD","5C","2D","QH","4D","3H","6D"],
["QH","AH","TD","JC","3C","2H","4C","6S","3H","8C"],
["9H","KD","4D","KS","TS","8H","QH","QC","3D","5S"],
["KD","4H","2D","AH","7C","6D","9S","TD","6S","2H"],
["AD","TH","5D","6S","7D","7S","QD","8D","KH","KD"],
["KC","9H","4S","9D","8C","8D","5H","8H","4D","2C"],
["QS","5D","7D","2D","6S","3S","4S","6D","QC","QH"],
["QS","8S","KD","3D","JD","7D","KH","2C","2S","5H"],
["AD","9D","6H","KS","3D","7C","QS","TH","5C","2C"],
["TH","3D","2S","2H","AD","8H","AH","TD","2D","4C"],
["AD","KS","3D","4D","TC","6D","4H","6C","7S","5C"],
["AS","3C","2S","6S","8H","QD","JS","6D","6H","AD"],
["AS","3D","TC","JH","QD","8D","KD","5C","3S","5H"],
["4D","6S","TC","5H","KS","7D","QC","8S","4H","JC"],
["9D","7H","9S","6S","2H","3C","3S","2D","4D","JC"],
["TH","AS","9C","TC","2S","5C","7D","AH","4H","5S"],
["9D","KH","JS","AD","JH","QC","6C","4S","7H","TS"],
["8H","JH","2C","4D","9H","AS","4H","6D","8C","2H"],
["JS","TH","4S","3D","KD","TC","4H","5H","9D","QS"],
["QD","QH","QC","4S","9S","4H","2C","KH","9C","8H"],
["TD","QC","4H","7C","3C","5D","4D","3D","4S","2H"],
["9S","JC","JS","8S","QS","7D","TC","8D","5C","TD"],
["AD","7H","AC","7D","KD","8D","9D","3C","QS","2S"],
["5H","KS","QS","9S","QC","7C","5C","JS","9C","6H"],
["3C","3H","9D","3D","TS","JS","4C","JC","8H","QH"],
["3D","4H","JD","TH","9C","4D","9H","QH","TD","5H"],
["6S","9C","5H","KD","2S","5D","3S","3C","KC","9D"],
["5H","2C","3H","7S","6S","9S","TC","3C","9H","TH"],
["JH","QC","AC","KS","4S","5D","3H","TC","JS","JC"],
["8D","7D","TC","JS","7S","JD","7H","KD","2C","8C"],
["JH","QH","8C","2C","7S","7H","AS","KC","TD","QS"],
["8H","KC","8C","3C","6H","8D","QC","8S","5H","5C"],
["8C","7D","AH","KC","9C","3H","JS","4D","2D","QC"],
["7S","8C","JD","4S","AH","2S","6D","AS","JS","TD"],
["AC","7S","KS","QD","JD","3D","8D","9H","TS","TC"],
["QS","9H","TS","JD","6S","6D","8D","4H","AH","7C"],
["5C","7H","7C","6H","9S","4D","9C","5D","AC","TD"],
["JC","3C","TH","2C","5D","8C","5C","7H","TD","AD"],
["3C","TD","7H","2H","3D","QC","7S","6C","AD","7D"],
["6H","6S","AH","7H","5C","TD","TC","3D","6D","9C"],
["AC","QH","3C","7C","JH","2D","8C","6S","TS","2S"],
["5D","JS","9D","8H","5S","5C","KH","AS","2H","9S"],
["QC","3S","8S","7H","AC","KC","JC","KD","3D","JS"],
["7D","7H","9D","JD","KS","TD","QD","AH","4S","4H"],
["7C","4S","AC","2H","KH","KC","2D","TH","5H","8S"],
["8H","7S","3S","AC","3H","7C","AH","5S","9C","JS"],
["4D","5D","6S","3S","TS","AD","8H","JD","3D","JC"],
["4C","JH","9C","8C","9D","3D","4D","5C","TS","JD"],
["KH","5H","JC","TD","2C","JD","QS","5D","AS","6D"],
["TC","AD","3C","7C","QC","KS","6H","JC","7S","9D"],
["3H","3S","KS","9C","6S","4D","KD","2S","5H","JC"],
["JD","TH","5D","2S","5H","AD","8S","TC","KS","8H"],
["AC","TS","3C","8C","9D","2D","QH","4H","6H","2S"],
["3D","TS","9D","6D","4S","3H","QC","KS","4C","JS"],
["QS","7D","2S","AS","2C","4C","AD","7S","QC","3H"],
["5S","AS","9H","5H","7H","3S","AC","7C","TD","TC"],
["8D","4D","TC","AH","QH","2S","4S","3C","TH","5S"],
["QC","7C","AH","KS","3D","9H","QS","8C","4S","5C"],
["5S","9S","3D","6C","JH","4H","KH","8C","JS","7S"],
["4D","6C","3S","QC","KD","2S","8S","6H","AC","4H"],
["JD","4D","AS","TH","JS","AD","QC","8H","AC","9H"],
["JS","7H","2H","KD","AS","TC","9H","KH","6D","JD"],
["3H","KD","9H","6H","JC","3C","6D","AH","4H","8H"],
["8H","TC","AS","2S","TS","KS","5H","5D","6S","2C"],
["8C","5S","9S","9H","JH","8S","4D","9D","5H","3S"],
["8C","8H","QH","5D","6S","3S","AH","9H","JH","5C"],
["JD","9S","3C","2S","AS","AH","7C","KC","TH","2H"],
["7H","5D","KC","9H","9D","3S","TC","TS","TD","8C"],
["7C","4H","QH","2C","TD","6D","6H","7D","AS","JS"],
["7H","2C","AH","6S","3D","4H","TC","QS","3H","8H"],
["QH","AS","TC","TD","3D","KH","2S","5H","TH","JS"],
["4H","JD","JC","KC","9H","AH","3C","TH","5C","7C"],
["4H","4D","7D","QH","5S","TC","4S","TD","JD","7H"],
["KD","2D","6S","KC","3D","2S","9D","9C","3S","AS"],
["2S","TD","JS","9H","AS","5D","3C","JH","8C","2H"],
["3H","6C","9C","5C","7H","QD","AS","4C","KC","7C"],
["6D","AS","2S","6S","7D","4H","TH","2H","TS","5D"],
["5H","TD","TC","TS","7H","8S","6H","7C","KC","QD"],
["2H","4H","2D","QD","7S","7H","QC","3S","5D","6H"],
["2D","7D","8S","QH","9S","AH","KD","JH","6S","TC"],
["9H","TD","QC","6S","3H","4H","JC","7D","JH","KH"],
["3D","4D","9C","4S","JD","TC","KS","8D","9S","QD"],
["KD","TD","8H","9H","3C","8S","3D","TC","QS","AD"],
["8S","5H","TC","7C","4C","QH","2C","AC","JD","8H"],
["JS","KD","5C","2S","AH","4H","JH","5D","2H","8S"],
["TS","5S","3D","9C","9D","8S","KD","AD","7S","2H"],
["JD","AC","5S","TD","TC","7C","5H","AS","5D","5C"],
["4D","5C","7D","TC","AS","AC","KC","JC","5D","KS"],
["4D","TH","QS","5H","3H","7H","7D","JD","2C","AH"],
["8D","KD","QD","JD","8C","3S","2S","7S","5C","4C"],
["AH","5H","2H","8C","3H","AD","TH","7H","4H","2S"],
["2H","8S","5D","9C","8C","4D","3H","9H","2C","AS"],
["AC","2H","JH","QC","8H","JC","AS","5D","3C","6S"],
["6S","TC","JC","AC","TH","2C","6H","5C","AH","4D"],
["AS","3S","TC","9H","4S","KS","TS","JC","TD","3D"],
["QS","AH","7S","8C","5D","TS","KH","KC","3H","3D"],
["7C","JD","2S","AH","6H","4D","AS","5D","5H","8D"],
["QC","4C","KS","9D","QH","4H","7H","5H","JS","6C"],
["5D","TD","QS","QH","9S","TC","2S","QC","5C","8H"],
["9S","QC","KC","QS","4C","JS","5S","4D","2C","3C"],
["KD","5C","8C","KC","6D","KS","3D","QS","2C","9D"],
["2D","4C","5D","8C","8H","TS","JS","KC","4H","2H"],
["8H","QD","6C","2D","AS","KS","4C","2C","TC","KD"],
["9H","6S","TH","2H","JC","KC","TS","7D","3H","2D"],
["4H","2D","9C","8D","7S","5S","4C","9D","3S","7D"],
["3D","6S","TC","4S","2H","5C","6C","9S","AH","3S"],
["6C","KH","6H","AC","7D","9S","QD","AS","5C","5H"],
["QD","TH","6D","TC","9S","2H","QS","4C","KH","JC"],
["AD","6D","2H","8H","KH","9D","9H","4D","QC","7C"],
["JD","4C","AD","6H","2D","AS","9S","TH","8S","4S"],
["JD","4S","8S","8H","3C","4C","6C","2H","3S","AC"],
["KS","8D","9D","3D","TH","4D","7S","TC","7H","JH"],
["2C","4C","2H","6S","2D","QD","QH","3H","AH","2S"],
["9D","AS","3H","9H","KD","4C","2S","2D","AD","JH"],
["TC","4S","6H","KS","2D","AD","4C","2H","4D","TS"],
["KS","AS","8C","2S","JC","3C","6C","AD","6S","7D"],
["QC","AD","4H","AC","5H","5S","6D","6C","JD","2S"],
["5H","TH","JH","6C","3H","8S","8C","TS","JS","8D"],
["JD","3H","TC","AD","3S","9C","7S","KS","6S","AH"],
["AH","3C","2H","QH","5C","JD","2S","9C","6C","8S"],
["7C","QD","AD","6S","4H","AC","TD","JD","KD","7D"],
["6C","6H","QD","QS","QH","KH","5D","8H","TS","AD"],
["9S","JS","3S","5H","TH","TD","TC","4D","8D","2H"],
["QC","TC","AC","QD","5H","3C","JD","7H","4S","JC"],
["KH","JH","8H","KC","2C","9C","QH","9D","2H","AC"],
["TH","AD","6D","KC","AS","4D","5D","5H","6H","QD"],
["6C","KC","KH","6D","9C","5C","KS","4D","2H","3S"],
["5H","QS","TC","QD","JS","TH","AC","6S","7D","QH"],
["QD","TD","7H","7D","9H","9S","2S","KH","JD","5D"],
["7S","3C","2C","6D","7C","QH","JD","3S","AH","3H"],
["6S","3S","QH","JC","6H","4C","5C","KH","6D","KS"],
["QD","8D","TC","AC","QC","KS","JH","6H","9D","4C"],
["KD","QD","7D","6C","TC","7S","2D","8S","8C","8D"],
["4D","AS","2S","JS","9S","6S","8D","KC","4H","2H"],
["9H","7C","3C","7D","4H","6C","QH","QS","8C","QC"],
["7H","QD","8S","2D","QH","6D","TH","8C","3C","KC"],
["9D","6H","QH","QS","3D","8C","5S","3C","9H","6C"],
["6D","JD","8C","3D","KH","4H","8H","5C","7C","5H"],
["JD","QC","QD","QS","KD","9D","4H","AS","TH","4D"],
["3H","8D","AS","KH","6C","9D","7H","6S","7D","4C"],
["TC","6D","TD","5S","AH","6S","6C","KH","9D","3D"],
["2H","2C","QD","4S","JH","3C","3S","AH","9H","5H"],
["9S","5C","8D","AH","9D","6S","3S","2H","JD","KH"],
["TH","QH","6H","2S","8H","7D","JS","2C","AD","JH"],
["7D","JC","5S","9S","4D","3D","TS","AC","2S","QD"],
["8C","AH","5H","KH","7H","4H","2H","QS","AS","8D"],
["5C","8D","7S","3D","JC","JS","4H","JH","9S","5H"],
["8C","3S","5C","JC","3D","TH","2S","3H","7H","4H"],
["QD","AS","JC","8C","AC","4C","3H","7H","6H","TC"],
["JH","KS","7S","JD","JS","AS","8H","QS","KH","2D"],
["KC","QD","AS","JD","QS","8C","3S","9D","6C","8H"],
["4D","JH","6S","8D","6D","AC","TC","6H","7C","KD"],
["TH","5H","9S","KD","8H","4S","5C","9H","QC","3D"],
["5S","5D","3S","QH","2H","2C","4S","5C","JD","6H"],
["9C","JC","8D","KD","7C","TC","KH","3H","AS","JD"],
["7S","AS","2H","QC","3D","4D","TC","KD","4S","2S"],
["TS","JD","9D","AH","2C","KH","2D","6D","KS","4C"],
["2S","2C","9S","9H","TD","TC","7S","3D","JS","8D"],
["9S","AH","JH","3D","QH","2D","8C","4D","KS","QS"],
["5H","8D","QD","7C","5C","5S","2D","3S","TD","AC"],
["4D","JC","QH","2D","KC","AS","6D","9C","8H","4S"],
["TH","4S","4C","KC","6H","4D","9C","7S","5S","JS"],
["3D","TS","9D","JH","7H","8H","JD","5H","3S","AH"],
["2H","6C","9D","8H","AC","9H","8S","4S","8C","JH"],
["6H","4S","QD","KD","4D","4C","2D","QS","9S","TC"],
["2D","6C","9S","JH","5S","QS","4S","2C","KH","8S"],
["TH","4D","4H","8S","7S","AC","4S","QC","KH","3S"],
["2H","AS","TD","2D","6C","2C","2S","TC","9H","5D"],
["9H","3D","9C","4C","JC","5H","6C","5D","QS","7D"],
["2D","2S","9C","AH","3H","6H","AD","JC","TH","7S"],
["7C","JS","AH","JH","2D","9S","4H","8S","AC","7H"],
["QD","JC","4S","6H","AS","3H","QH","JS","TH","2D"],
["4H","TS","4C","AH","8H","7S","JD","4D","AC","5D"],
["9C","TH","7C","AH","2D","5S","8H","QS","2H","4S"],
["9S","KH","QC","TD","2S","TC","8C","AS","KS","JS"],
["AC","8D","QH","9C","TD","KS","7S","2H","JC","TC"],
["4H","JD","AH","3H","8H","AS","9C","KC","QS","8C"],
["6H","6S","3D","JH","4H","KC","5D","5C","KD","2H"],
["AH","5H","5C","2D","8D","TS","9C","QD","7C","JC"],
["TH","6H","2H","7C","7D","8S","QH","4D","9D","4H"],
["AS","4S","TC","6C","5C","3C","QH","7H","TS","QC"],
["8C","6H","JD","QC","AD","6S","7C","3S","4S","3C"],
["KC","6S","QD","8D","7C","6D","3D","AC","JD","2S"],
["KH","7D","4C","QS","TH","AS","9S","9D","6S","AC"],
["5D","5S","6H","TC","KS","QD","7C","6D","2S","JC"],
["2D","5D","2C","TH","9S","6H","AD","4C","6C","TS"],
["9S","7H","QS","6C","2H","JS","KH","8S","AD","4D"],
["7H","9H","6H","4D","8S","7C","7S","KH","5S","9C"],
["8C","2S","5D","5S","3D","9C","KS","9D","QC","3H"],
["7C","JH","AC","QS","JD","3D","3C","TC","4S","8D"],
["3S","9S","AC","9H","JS","TH","AS","4C","3D","KD"],
["2H","4D","9H","AC","3H","6S","JC","AS","QS","9D"],
["TS","7C","5H","QD","5D","9H","AH","TC","9D","4S"],
["5C","6S","AC","9S","9H","6C","JS","TD","JC","2C"],
["AH","2D","5S","4S","KH","4C","6S","QS","9D","JD"],
["6S","2D","QC","2C","8S","QS","JS","7S","7H","2H"],
["9H","JC","9C","6H","TH","2D","JH","7D","AS","8H"],
["JH","JD","8C","2C","5H","4S","6D","4C","AS","TS"],
["TH","AH","KS","KD","6C","JC","4S","7S","AD","TS"],
["2H","5C","3D","KC","TD","9S","AS","8C","3H","5D"],
["KS","JD","5S","4C","8C","7D","6S","TC","QD","KC"],
["7H","QH","6H","8S","5C","9C","2C","3S","QS","TD"],
["4C","JH","7D","QH","5H","8H","8S","JC","2H","TD"],
["5H","5S","JD","3H","2H","4C","JC","3C","4H","AS"],
["JC","6D","QC","TH","7C","4D","6C","TD","AS","AC"],
["5S","2S","5C","7S","3C","KC","9D","3H","2C","AS"],
["5C","9S","2C","5D","7C","6C","8S","3H","JC","KD"],
["2D","QS","JH","KH","AH","9S","3S","AD","9D","2S"],
["QD","3H","5C","KS","9D","2C","AH","KD","6C","2D"],
["5H","2H","JD","5D","QS","3D","3S","8C","5C","AH"],
["3H","2C","KS","QH","5S","KH","9D","6D","7H","7D"],
["AS","8D","2D","QC","7C","KS","8H","AD","8C","AC"],
["QH","AS","QS","9S","AH","2S","7S","4S","2C","TH"],
["QC","4H","TD","JH","KS","4S","7S","3S","4D","3C"],
["9H","2D","QD","9D","3H","6D","TD","JC","2H","TS"],
["JH","4C","TH","TC","QH","9H","5S","5C","QC","6H"],
["JS","2S","9S","9D","5D","JH","4C","9H","2C","8C"],
["9C","5C","2H","AD","3C","5S","KS","7C","3D","2C"],
["7D","TH","AC","2C","4D","KD","2S","7S","AH","3H"],
["7S","JH","TC","7D","7C","TH","JC","7H","5D","4D"],
["AH","3H","JS","TH","2H","9S","9H","AD","AC","3S"],
["8H","JH","3S","2S","KH","5H","9C","9D","TH","AD"],
["6S","7D","6D","5D","2H","AH","QD","4C","8S","3H"],
["3D","8H","8D","KH","QS","AD","TC","7D","2S","5H"],
["AC","3C","JD","5H","3D","6C","3H","QC","2S","9C"],
["6S","AC","3H","TS","JS","6H","KD","7S","JD","8S"],
["JC","3S","7H","AS","9C","KC","TD","2D","5S","3D"],
["4H","JC","QH","3S","7D","KD","KS","8D","9H","5H"],
["7C","JH","9D","3C","JC","8C","QC","5C","9S","TC"],
["6S","QH","2S","QD","QC","AS","5H","4D","2C","TC"],
["3C","5S","8C","TD","6S","5C","4D","5D","8S","KS"],
["3H","KC","2D","AH","9H","7S","8C","7D","7C","5C"],
["3D","TH","JH","8C","9C","AS","6H","JS","QH","8H"],
["JH","JS","5H","8C","QC","2H","7C","TD","AH","7D"],
["9D","8C","6D","9S","QS","AD","JD","8H","8D","JS"],
["8C","JH","AS","AH","KH","9C","QH","2H","TC","AD"],
["3C","4D","2S","9D","JD","2H","5S","TH","8D","8S"],
["2C","9S","AH","QH","KH","AC","7S","KD","QD","QC"],
["QD","2S","6C","JD","JC","8H","7C","KH","2D","5H"],
["AD","3D","3H","TC","2C","JD","5S","7H","JS","8D"],
["QD","9C","AC","QC","9S","2C","KS","8H","5S","5H"],
["KD","9H","4D","7D","7C","JD","9S","6D","7H","6S"],
["QD","8D","6S","KD","KH","9H","3D","4S","TS","5S"],
["QC","JH","6S","7H","8H","2H","8S","JC","5H","KS"],
["6S","9C","6H","8H","4C","4S","JD","2C","5H","KD"],
["2S","QC","3C","JH","9S","QD","6H","AD","KS","KC"],
["KS","2D","QS","TH","7H","4S","4C","2H","8S","JD"],
["8H","KH","3H","TC","4C","AC","4S","QH","QD","TH"],
["KC","AD","KH","JC","3S","QS","3D","JS","AC","2S"],
["9H","5S","TC","KS","9D","5D","KC","2H","2S","QS"],
["2D","8S","TC","AS","JH","8H","QC","6C","3C","8D"],
["QS","9C","TD","TH","5H","8C","7H","6D","5S","4H"],
["5S","8C","9S","5D","3S","3C","3H","6H","8H","AD"],
["QD","JD","JH","QH","3H","AS","2S","8S","TS","4D"],
["3H","5S","AC","5C","9S","3S","JC","5D","4S","3C"],
["QC","AH","AC","TH","3H","6D","8D","7H","AS","JC"],
["AD","KS","TS","2D","4C","JD","6S","5S","AH","7S"],
["3S","KC","AH","4H","6D","3D","9S","JD","2S","KD"],
["4C","9D","JD","QH","9C","3D","7H","JC","KS","2H"],
["3S","QS","KH","7S","2C","3H","KC","8C","JD","AH"],
["3S","QH","2S","KS","9S","TD","7S","QC","8H","TC"],
["3D","JC","KH","6D","AD","7D","JD","8S","4S","3S"],
["9S","TS","JC","KH","KS","QC","7H","5H","4S","JH"],
["AS","8H","3S","9S","TS","AD","KC","JS","9D","4C"],
["QD","2C","5D","KD","QS","6D","2S","9H","AS","QH"],
["KC","2C","4D","KD","3H","2D","4S","7S","7H","8D"],
["8S","2H","3S","KC","KS","AC","AH","TC","9D","JD"],
["2D","9H","9C","7D","TC","5H","JC","5D","6H","4S"],
["JD","6D","3C","5S","TD","QH","9H","2D","TH","6S"],
["JC","6H","JH","9C","9S","4H","3D","2D","QD","TH"],
["5H","2H","9H","4S","TC","JC","8D","JH","2C","AH"],
["4C","TH","KH","AC","KD","JC","2S","4H","QS","QH"],
["AH","KH","4H","9H","KS","6S","TD","QC","TC","5S"],
["6C","2H","2D","3C","2C","7S","9C","3S","AD","6S"],
["8D","4C","TS","KS","2S","2D","TD","6H","3C","TH"],
["5S","2D","JS","9D","4H","8D","QD","7D","5H","6S"],
["QD","8S","2H","5C","6C","9D","5S","3S","KH","3C"],
["6H","QC","3D","JC","KS","JH","9S","3H","4S","TS"],
["9D","8C","JD","3C","6H","2C","5H","9C","KC","QS"],
["9S","5D","6H","AS","JH","TC","2S","6C","5C","JS"],
["4C","7H","9C","7C","KH","KS","8H","AS","3H","6D"],
["6H","QC","8S","2C","AH","JH","AC","6C","AS","2H"],
["3C","2H","6S","3H","AD","KH","5S","9S","KD","3D"],
["3S","KH","7S","TS","5C","AH","3H","3C","QD","TC"],
["AD","JH","QC","3H","8S","2S","2D","4H","5S","TD"],
["JS","AC","9C","QC","3D","6C","7H","2S","TD","5S"],
["AC","6H","KS","4S","5D","QS","9C","9D","AD","8S"],
["TS","8D","7S","2D","QD","JH","2C","5C","KD","5H"],
["JC","5H","KD","2S","8H","AH","3C","QS","JH","7C"],
["5D","QD","2C","KD","KH","4D","2D","7H","8D","3C"],
["TH","QD","2S","6H","JH","4C","JC","QC","2C","JD"],
["2H","TD","9D","QS","7H","QH","TH","JH","2C","AC"],
["6S","QD","KC","JD","KS","4C","KH","5S","7S","AS"],
["4D","7D","5H","KH","KS","4S","TS","6D","6H","4H"],
["7S","8S","2C","7H","2H","KS","9H","JS","JD","8C"],
["KD","AS","TC","5D","AH","JD","9H","TD","2C","QS"],
["AD","2S","9H","6S","TH","3S","KC","JH","AC","9D"],
["5S","4S","JC","JS","4D","KS","6D","AD","AH","KC"],
["KS","9D","QC","TD","4H","5D","TH","AH","3C","6D"],
["AD","7S","QS","3C","9D","8S","4C","3H","AC","KS"],
["6S","5H","4D","KS","6D","AD","JD","TH","KH","TS"],
["7D","TH","3S","AS","4D","AC","3C","4S","3H","9D"],
["AS","KC","2H","7D","5D","AD","3D","8H","3S","4H"],
["7D","TS","4S","7C","9C","JH","2H","6S","TH","2D"],
["QS","3D","2C","KC","8S","AS","9C","KD","3C","2H"],
["AH","2S","JC","3C","4C","9D","2C","4H","6C","8C"],
["6S","9C","AD","5C","TC","4H","QH","QD","KD","JD"],
["QC","JS","9S","5S","QS","9H","TD","2C","3D","7D"],
["5D","AS","4S","4D","AH","3S","9D","JC","QS","7H"],
["JD","QH","KC","9H","JC","TD","AC","QC","QS","5C"],
["3C","QD","9S","TD","TC","JS","KS","2S","KD","TH"],
["4C","TH","2H","2C","6S","6H","8H","TD","7H","3H"],
["JH","QD","5D","KC","2H","TC","TS","AC","8D","9D"],
["4C","KS","JD","8S","JC","3C","QH","6S","JS","AS"],
["3C","6S","4D","QC","QH","2D","3H","8S","6H","7H"],
["JS","9D","6S","4H","QC","2S","9C","QH","5H","6C"],
["KH","6D","6S","TH","TD","AC","JS","QC","7D","5C"],
["7S","3C","9S","KC","6C","JD","TC","AH","9C","QC"],
["KC","AS","5D","2H","TS","9C","KH","8S","7C","6D"],
["6C","TS","KC","KH","TD","6S","TH","9S","QD","AH"],
["KS","QC","JH","9H","4C","7C","TD","TS","2S","TC"],
["3S","3C","2C","KH","AH","8C","6D","5S","9S","JS"],
["8D","KS","2S","QD","TS","7C","8S","TH","9C","9D"],
["TD","7D","5S","TS","9C","8C","3S","AS","QS","2H"],
["6H","4D","KC","8S","6D","7H","2D","3D","8H","QH"],
["TS","5C","AH","3D","KC","4S","JS","KD","9D","AC"],
["6H","KD","5D","KH","AC","7D","9D","2S","3S","4C"],
["8D","6S","9D","AH","2H","8S","JS","JH","4S","3S"],
["AS","TS","4D","4S","8C","QS","5C","TD","9H","8S"],
["5S","TH","9D","JH","7H","KH","3D","2H","4C","7D"],
["JD","QS","7H","2H","8C","TH","3H","7S","6S","8D"],
["6S","AC","2D","JH","QS","TD","8C","9D","4D","4H"],
["6D","JD","5D","TC","9C","8C","3H","JS","9S","6H"],
["QS","6S","2D","9H","JD","9S","KC","5C","5H","4D"],
["KD","QC","2S","KS","7D","9C","9H","KH","QH","5D"],
["7C","7H","9C","QD","4H","6S","5C","4D","TH","QH"],
["TC","5S","KD","QD","4S","6S","7D","5D","TH","KH"],
["4S","TC","6H","KC","2H","6C","TS","7C","AH","8S"],
["9D","8C","5H","KH","2S","6S","3H","AC","TH","2D"],
["AS","5D","9S","4D","JC","KC","7C","6S","5S","3S"],
["AH","KH","TC","5C","AC","5H","AS","4H","3H","4D"],
["3S","AD","6D","2H","4C","5H","AS","7D","AC","QD"],
["AH","4C","3S","8C","2H","5D","7S","6C","4H","JH"],
["3H","9C","4D","QD","7S","5D","7H","4H","5S","QH"],
["2H","9S","9C","JD","KH","TD","4H","JC","9H","8H"]]


//The main game function
const game = (arr) => {
  //for each game divide players 1 & 2
  const player1 = arr.slice(0,5);
  const player2 = arr.slice(5,10);

//a function to assign values to letters T,J,Q,K,A
  const iffr = (value) => {
    let first = value;
    if(value === 'T'){
      first = "10";
    }else if(value === 'J'){
      first = "11";
    }else if(value === 'Q'){
      first = "12";
    }else if(value === 'K'){
      first = "13";
    }else if(value === 'A'){
      first = "14";
    }
    return first;
  }

//Map the arrays to crete an array of values
  const play1 = player1.map((value,index)=>{
    let first = value.split('')[0];
    first = iffr(first);
    return first;
  })
  const play2 = player2.map((value,index)=>{
    let first = value.split('')[0];
    first = iffr(first);
    return first;
  })
//Map the arrays to create an array of suits
  const play1Suit = player1.map((value,index)=>{
    let first = value.split('')[1];
    return first;
  })
  const play2Suit = player2.map((value,index)=>{
    let first = value.split('')[1];
    return first;
  })

//Sort the value arrays to be assending
  const first = play1.sort((a,b)=>a-b);
  const second = play2.sort((a,b)=>a-b);

//Function to compare hand with ranking values
  const numberComp = (arr,arr2) => {
    //initial assigned values
    let value = 1;
    let highCard = arr[4];
    let suit = false;
    let straight = false;

    //test if the suits are all the same
    if(arr2[0] === arr2[1] && arr2[0] === arr2[2] && arr2[0] === arr2[3] && arr2[0] === arr2[4]){
      suit = true;
    }
    //test for a straight (ascending values)
    let count = 0;
    for( let i = 0; i < 4; i++ ){
      if(parseInt(arr[i]) === (parseInt(arr[i + 1]) - 1)){
        count++;
      }
    }
    if(count === 4) straight = true;


    //check for pairs
    let pairCounter = 0;
    for( let i = 0; i < 4; i++ ){
      if(arr[i] === arr[i + 1] ){
        pairCounter++;
        highCard = arr[i];
      }
    }
    //check for three of a kind
    let threeCounter = 0;
    for( let i = 0; i < 3; i++ ){
      if(arr[i] === arr[i + 1] && arr[i] === arr[i + 2]){
        threeCounter++;
        highCard = arr[i];
      }
    }
    //check for four of a kind
    let fourCounter = 0;
    for( let i = 0; i < 2; i++ ){
      if(arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i] === arr[i + 3]){
        fourCounter++;
        highCard = arr[i];
      }
    }

    //assign a ranking value to the players
    if(arr[0] === '10' && arr[1] === '11' && arr[2] === '12' && arr[3] === '13' && arr[4] === '14' && suit === true){
      value = 10;
    }else if(suit === true && straight === true){
      value = 9;
    }else if(fourCounter === 1){
      value = 8;
    }else if(pairCounter === 3 && threeCounter === 1){
      value = 7;
    }else if(suit === true){
      value = 6;
    }else if(straight === true){
      value = 5;
    }else if(pairCounter === 2 && threeCounter === 1){
      value = 4;
    }else if(pairCounter === 2 && threeCounter === 0){
      value = 3;
    }else if(pairCounter === 1 && threeCounter === 0){
      value = 2;
    }else if(pairCounter === 0){
      value = 1;
      highCard = arr[4];
    }

    return [value, parseInt(highCard)];
  }

  //compare rankings of the two players according to the rules.
  if(numberComp(first, play1Suit)[0] > numberComp(second, play2Suit)[0]){
    return 1;
  }else if(numberComp(first, play1Suit)[0] === numberComp(second, play2Suit)[0]){
    if(numberComp(first, play1Suit)[1] > numberComp(second, play2Suit)[1]){
      return 1;
    }else if(numberComp(first, play1Suit)[1] === numberComp(second, play2Suit)[1]){
      // console.log("hello");
      if(parseInt(play1[4]) > parseInt(play2[4])){
        return 1;
      }else if(parseInt(play1[4]) === parseInt(play2[4])){
        if(parseInt(play1[3]) > parseInt(play2[3])){
          return 1;
        }else if(parseInt(play1[3]) === parseInt(play2[3])){
          if(parseInt(play1[2]) > parseInt(play2[2])){
            return 1;
          }else{
            return 2;
          }
        }else{
          return 2;
        }
      }else{
        return 2;
      }
    }else{
      return 2;
    }
  }else{
    return 2;
  }
}

//loop through all the games and check who wins
let player1 = 0;
let player2 = 0;
for( let i = 0; i < array.length; i++ ){
  if(game(array[i]) === 1){
    player1++;
  }else if(game(array[i]) === 2){
    player2++;
  }
}

//printb the result to the console
console.log("Player 1:", player1, "Player 2:", player2);
