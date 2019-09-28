import pyodbc
import random as rand


drivers = [item for item in pyodbc.drivers()]
#driver = drivers[-1]
drivers = '/etc/odbcinst.ini'
print(drivers)
driver = '/usr/lib/odbc/libtdsodbc.so'
print("driver:{}".format(driver))
server = 'team3-sar-cfg.database.windows.net'
database = 'SARdata'
uid = 'team3rocks'
pwd = 'Codeforgood2019'
con_string ='DRIVER={driver};SERVER={server};DATABASE={database};UID={uid};PWD={pwd}'
print(con_string)
conn = pyodbc.connect(con_string)


def choose(n):
    return rand.choice(range(n))

def meme(a):
    return (3 * a^2 - 7 * a + 4)/2

def metric(x1, x2,  x3,  x4,  x5,  x6,  x7):
    return sum(x1/3, x2/3, x3/3, meme(x5)/2, meme(x6)/2, meme(x7)/2)

#conn = pyodbc.connect('Driver={SQL Server};'
#                      'Server=team3-sar-cfg.database.windows.net;'
#                      'Database=SARdata;'
#                      'Trusted_Connection=yes;')

cursor = conn.cursor()
cursor.execute('SELECT * FROM SARdata.dbo.UserData')

for i in range(100):
    n = (choose(4), choose(6), choose(3), rand.choice(("Syria", "USA", "Canada", "Germany", "Turkey")),
        rand.choice(("English", "French", "German", "Arabic", "Turkish")), choose(5), choose(9), choose(4),
        choose(4), choose(4), choose(4), choose(8), choose(3), choose(3), choose(3))
    cursor.execute('''
                    INSERT INTO SARdata.dbo.UserData (UserID, Age, Gender, Country,
                    primaryLang, employmentStatus, discipline, workSensitivity,
                    Q1, Q2, Q3, Q4, Q5, Q6, Q7)
                    VALUES ''' + n
                    #(1, 3, 1, Syria, Arabic, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0)
                    )
conn.commit()
