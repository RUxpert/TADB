import DashboardController from './DashboardController'
import EventController from './EventController'
import CategoryController from './CategoryController'

const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    EventController: Object.assign(EventController, EventController),
    CategoryController: Object.assign(CategoryController, CategoryController),
}

export default Admin