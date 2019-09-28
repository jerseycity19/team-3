import pyodbc
import random as rand

def idgaf(int n):
    return rand.choice(range(n))

def meme(int a):
    return (3 * a^2 - 7 * a + 4)/2

def metric(int x1, int x2, int x3, int x4, int x5, int x6, int x7):
    return sum(x1/3, x2/3, x3/3, meme(x5)/2, meme(x6)/2, meme(x7)/2)    

conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=team3-sar-cfg.database.windows.net;'
                      'Database=SARdata;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()
cursor.execute('SELECT * FROM SARdata.dbo.UserData')

for i in range(100):
    n = (idgaf(4), idgaf(6), idgaf(3), rand.choice(("Syria", "USA", "Canada", "Germany", "Turkey")), 
        rand.choice(("English", "French", "German", "Arabic", "Turkish")), idgaf(5), idgaf(9), idgaf(4), 
        idgaf(4), idgaf(4), idgaf(4), idgaf(8), idgaf(3), idgaf(3), idgaf(3))
    cursor.execute('''
                    INSERT INTO SARdata.dbo.UserData (UserID, Age, Gender, Country,
                    primaryLang, employmentStatus, discipline, workSensitivity,
                    Q1, Q2, Q3, Q4, Q5, Q6, Q7)
                    VALUES ''' + n
                    #(1, 3, 1, Syria, Arabic, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0)
                    )
conn.commit()