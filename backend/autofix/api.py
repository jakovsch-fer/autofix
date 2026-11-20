from ninja import NinjaAPI

api = NinjaAPI(title='Autofix API')
api.add_router('/auth', 'users.api.auth')
api.add_router('/users', 'users.api.users')
