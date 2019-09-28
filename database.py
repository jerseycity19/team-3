import pyodbc

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


cursor.execute('''
                INSERT INTO SARdata.dbo.UserData (UserID, Age, Gender, Country,
                primaryLang, employmentStatus, discipline, workSensitivity,
                Q1, Q2, Q3, Q4, Q5, Q6, Q7)
                VALUES
                (1, 3, 1, Syria, Arabic, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0)
                ''')
conn.commit()