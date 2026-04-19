import HomeController from './HomeController'
import EventController from './EventController'
import Admin from './Admin'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    EventController: Object.assign(EventController, EventController),
    Admin: Object.assign(Admin, Admin),
}

export default Controllers