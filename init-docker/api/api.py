from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Rappers(Resource):
    def get(self):
        return{
            'Names':['YBN Nahmir','Chief Keef', 'Bobby Shmurda', '21 Savage']
        }

api.add_resource(Rappers, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
