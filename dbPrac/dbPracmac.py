from pymongo import MongoClient
import certifi

#붕기db
ca = certifi.where()
client = MongoClient('mongodb+srv://test:sparta@cluster0.az4tite.mongodb.net/Clustor0?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta




# pymongo로 DB 조작하기
# db.users.insert_one({'name' : 'bobby','age' : 7}) # 데이터 넣기
# db.users.insert_one({'name' : 'cassie','age' : 27})
# db.users.insert_one({'name' : 'kim','age' : 17})

db.newjeans.insert_one({'ID' : 'wjdqndrl','PW' : '12345','NAME' : '정붕기','HP' : '01012341234'})


# 모든 데이터 뽑아보기
#all_users = list(db.users.find({},{'_id':False}))

#print(all_users[0])         # 0번째 결과값을 보기
#print(all_users[0]['name']) # 0번째 결과값의 'name'을 보기

#for user in all_users:      # 반복문을 돌며 모든 결과값을 보기
    #print(user)

# 특정 결과 값 뽑기
#user = db.users.find_one({'name':'bobby'})
#print(user)

# 수정하기
#db.users.update_one({'name':'bobby'},{'$set':{'age':28}})

#user = db.users.find_one({'name':'bobby'})
#print(user)

# 삭제하기
# db.users.delete_one({'name':'bobby'})
#
# user = db.users.find_one({'name':'bobby'})
# print(user)