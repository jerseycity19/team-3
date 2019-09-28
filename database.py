import pyodbc
import random as rand


# drivers = [item for item in pyodbc.drivers()]
# drivers = '/etc/odbcinst.ini'
# driver = '/usr/lib/odbc/libtdsodbc.so'
# server = 'team3-sar-cfg.database.windows.net'
# database = 'SARdata'
# uid = 'team3rocks'
# pwd = 'Codeforgood2019'
# con_string ='DRIVER={driver};SERVER={server};DATABASE={database};UID={uid};PWD={pwd}'
# conn = pyodbc.connect(con_string)


def choose(n):
    return rand.choice(range(n))

def meme(a):
    return (3 * a^2 - 7 * a + 4)/2

def metric(x1, x2,  x3,  x4,  x5,  x6,  x7):
    return sum(x1/3, x2/3, x3/3, meme(x5)/2, meme(x6)/2, meme(x7)/2)

adjectives = ['happy', 'scared', 'fearful', 'safe', 'free', 'sad', 'angry', 'resentful', 'excited', 'jubilant', 'consternated', 'elated', 'blank']
pronouns = ['I', 'he', 'she', 'they', 'we']
verbs = [('am', 'is', 'are'),
		 ('worry', 'worries', 'worry'),
		 ('hate', 'hates', 'hate'),
		 ('feel', 'feels', 'feel')]


list = []
for _ in range(100):
	i = choose(5)
	#print(i, (i+1)//2)
	sentence = pronouns[i] + ' ' + rand.choice(verbs)[(i+1)//2] + ' ' + rand.choice(adjectives)
	list += [(choose(4), choose(6), choose(3), rand.choice(("Syria", "USA", "Canada", "Germany", "Turkey")),
         	rand.choice(("English", "French", "German", "Arabic", "Turkish")), choose(5), choose(9), choose(4),
         	choose(4), choose(4), choose(4), choose(8), choose(3), choose(3), choose(3)), sentence]

print(list)


#SQL was giving us issues, so we couldn't implement it fully
#we instead have a list that we can write to a file

# cursor = conn.cursor()
# cursor.execute('SELECT * FROM SARdata.dbo.UserData')
#
# for i in range(100):
#     n = (choose(4), choose(6), choose(3), rand.choice(("Syria", "USA", "Canada", "Germany", "Turkey")),
#         rand.choice(("English", "French", "German", "Arabic", "Turkish")), choose(5), choose(9), choose(4),
#         choose(4), choose(4), choose(4), choose(8), choose(3), choose(3), choose(3))
#     cursor.execute('''
#                     INSERT INTO SARdata.dbo.UserData (UserID, Age, Gender, Country,
#                     primaryLang, employmentStatus, discipline, workSensitivity,
#                     Q1, Q2, Q3, Q4, Q5, Q6, Q7)
#                     VALUES ''' + n
#                     )
# conn.commit()
