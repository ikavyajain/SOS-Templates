import { createRouter, createWebHistory } from 'vue-router'

const authchildRoutes = (prop, mode = false) => [
  {
    path: '/signin',
    name: prop + '.signin',
    meta: { auth: true, name: 'SignIn' },
    component: () => import('../views/pages/Authentication/SignIn')
  },
  {
    path: '/signup',
    name: prop + '.signup',
    meta: { auth: true, name: 'SignUp' },
    component: () => import('../views/pages/Authentication/SignUp')
  },
  {
    path: '/confirmMail',
    name: prop + '.confirmMail',
    meta: { auth: true, name: 'Confirm Mail' },
    component: () => import('../views/pages/Authentication/ConfirmMail')
  },
  {
    path: '/recoverPassword',
    name: prop + '.recoverPassword',
    meta: { auth: true, name: 'Recover password' },
    component: () => import('../views/pages/Authentication/RecoverPassword')
  },
  // Error Pages
  {
    path: 'error404',
    name: prop + '.error404',
    meta: { auth: true, name: 'Error404' },
    component: () => import('../views/pages/Utilities/Error404')
  },
  {
    path: 'error500',
    name: prop + '.error500',
    meta: { auth: true, name: 'Error500' },
    component: () => import('../views/pages/Utilities/Error500')
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { auth: true, name: 'maintenance' },
    component: () => import('../views/pages/Utilities/Maintenance')
  }
]
const defaultchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'dashboard' },
    component: () => import('../views/main/user-dashboard')
  },
  {
    path: 'admin',
    name: prop + '.admin-dashboard',
    meta: { auth: true, name: 'admin-dashboard' },
    component: () => import('../views/main/admin-dashboard')
  },
  {
    path: 'restaurant',
    name: prop + '.restaurant-dashboard',
    meta: { auth: true, name: 'restaurant-dashboard' },
    component: () => import('../views/main/restaurant-dashboard')
  },
  // User Pages
  {
    path: 'UserAdd',
    name: prop + '.UserAdd',
    meta: { auth: true, name: 'UserAdd' },
    component: () => import('../views/pages/Users/UserAdd')
  },
  {
    path: 'UserList',
    name: prop + '.UserList',
    meta: { auth: true, name: 'UserList' },
    component: () => import('../views/pages/Users/UserList')
  },
  {
    path: 'UserProfile',
    name: prop + '.UserProfile',
    meta: { auth: true, name: 'User Profile' },
    component: () => import('../views/pages/Users/UserProfile')
  },
  {
    path: 'UserPrivacySetting',
    name: prop + '.UserPrivacySetting',
    meta: { auth: true, name: 'UserPrivacySetting' },
    component: () => import('../views/pages/Users/UserPrivacySetting')
  },
  // Special Pages
  {
    path: 'addtocart',
    name: prop + '.add-to-cart',
    meta: { auth: true, name: 'Add to cart' },
    component: () => import('../views/pages/SpecialPages/AddToCart')
  },
  {
    path: 'customer-review',
    name: prop + '.customer-review',
    meta: { auth: true, name: 'Customer Review' },
    component: () => import('../views/pages/SpecialPages/CustomerReview')
  },
  {
    path: 'dish-detail',
    name: prop + '.dish-detail',
    meta: { auth: true, name: 'Dish Detail' },
    component: () => import('../views/pages/SpecialPages/DishDetail')
  },
  {
    path: 'menu',
    name: prop + '.menu',
    meta: { auth: true, name: 'menu' },
    component: () => import('../views/pages/SpecialPages/Menu')
  },
  {
    path: 'order-detail',
    name: prop + '.order-detail',
    meta: { auth: true, name: 'Order Detail' },
    component: () => import('../views/pages/SpecialPages/OrderDetail')
  },
  {
    path: 'order-history',
    name: prop + '.order-history',
    meta: { auth: true, name: 'Order History' },
    component: () => import('../views/pages/SpecialPages/OrderHistory')
  },
  {
    path: 'restaurant-detail',
    name: prop + '.restaurant-detail',
    meta: { auth: true, name: 'restaurant Detail' },
    component: () => import('../views/pages/SpecialPages/RestaurantDetail')
  },
  // UiElements
  {
    path: 'UiAvatar',
    name: prop + '.ui-avatar',
    meta: { auth: true, name: 'Ui Avatar' },
    component: () => import('../views/Elements/UiElements/UiAvatar')
  },
  {
    path: 'UiAlerts',
    name: prop + '.ui-alerts',
    meta: { auth: true, name: 'Ui Alerts' },
    component: () => import('../views/Elements/UiElements/UiAlerts')
  },
  {
    path: 'UiBadges',
    name: prop + '.ui-badges',
    meta: { auth: true, name: 'Ui Badges' },
    component: () => import('../views/Elements/UiElements/UiBadges')
  },
  {
    path: 'UiBreadcrumb',
    name: prop + '.ui-breadcrumb',
    meta: { auth: true, name: 'Ui Breadcrumb' },
    component: () => import('../views/Elements/UiElements/UiBreadcrumb')
  },
  {
    path: 'UiButtons',
    name: prop + '.ui-buttons',
    meta: { auth: true, name: 'Ui Buttons' },
    component: () => import('../views/Elements/UiElements/UiButtons')
  },
  {
    path: 'UiButtonGroup',
    name: prop + '.ui-buttongroup',
    meta: { auth: true, name: 'Ui ButtonGroup' },
    component: () => import('../views/Elements/UiElements/UiButtonGroup')
  },
  {
    path: 'UiBoxShadow',
    name: prop + '.ui-BoxShadow',
    meta: { auth: true, name: 'Ui BoxShadow' },
    component: () => import('../views/Elements/UiElements/UiBoxShadow')
  },
  {
    path: 'UiColor',
    name: prop + '.ui-Color',
    meta: { auth: true, name: 'Ui Color' },
    component: () => import('../views/Elements/UiElements/UiColor')
  },
  {
    path: 'UiCards',
    name: prop + '.ui-Cards',
    meta: { auth: true, name: 'Ui Cards' },
    component: () => import('../views/Elements/UiElements/UiCards')
  },
  {
    path: 'UiCarousel',
    name: prop + '.ui-Carousel',
    meta: { auth: true, name: 'Ui Carousel' },
    component: () => import('../views/Elements/UiElements/UiCarousel')
  },
  {
    path: 'UiGrid',
    name: prop + '.ui-Grid',
    meta: { auth: true, name: 'Ui Grid' },
    component: () => import('../views/Elements/UiElements/UiGrid')
  },
  {
    path: 'UiHelperClasses',
    name: prop + '.ui-HelperClasses',
    meta: { auth: true, name: 'Ui HelperClasses' },
    component: () => import('../views/Elements/UiElements/UiHelperClasses')
  },
  {
    path: 'UiImages',
    name: prop + '.ui-Images',
    meta: { auth: true, name: 'Ui Images' },
    component: () => import('../views/Elements/UiElements/UiImages')
  },
  {
    path: 'UiListGroup',
    name: prop + '.ui-ListGroup',
    meta: { auth: true, name: 'Ui ListGroup' },
    component: () => import('../views/Elements/UiElements/UiListGroup')
  },
  {
    path: 'UiModal',
    name: prop + '.ui-Modal',
    meta: { auth: true, name: 'Ui Modal' },
    component: () => import('../views/Elements/UiElements/UiModal')
  },
  {
    path: 'UiNotification',
    name: prop + '.ui-Notification',
    meta: { auth: true, name: 'Ui Notification' },
    component: () => import('../views/Elements/UiElements/UiNotification')
  },
  {
    path: 'UiPagination',
    name: prop + '.ui-Pagination',
    meta: { auth: true, name: 'Ui Pagination' },
    component: () => import('../views/Elements/UiElements/UiPagination')
  },
  {
    path: 'UiPopOvers',
    name: prop + '.ui-PopOvers',
    meta: { auth: true, name: 'Ui PopOvers' },
    component: () => import('../views/Elements/UiElements/UiPopOvers')
  },
  {
    path: 'UiTypography',
    name: prop + '.ui-Typography',
    meta: { auth: true, name: 'Ui Typography' },
    component: () => import('../views/Elements/UiElements/UiTypography')
  },
  {
    path: 'UiTabs',
    name: prop + '.ui-Tabs',
    meta: { auth: true, name: 'Ui Tabs' },
    component: () => import('../views/Elements/UiElements/UiTabs')
  },
  {
    path: 'UiTooltips',
    name: prop + '.ui-Tooltips',
    meta: { auth: true, name: 'Ui Tooltips' },
    component: () => import('../views/Elements/UiElements/UiTooltips')
  },
  {
    path: 'UiEmbedVideo',
    name: prop + '.ui-EmbedVideo',
    meta: { auth: true, name: 'Ui EmbedVideo' },
    component: () => import('../views/Elements/UiElements/UiEmbedVideo')
  },
  // Widget pages
  {
    path: 'widgetbasic',
    name: prop + '.widgetbasic',
    meta: { auth: true, name: 'Widget Basic' },
    component: () => import('../views/Elements/widget/WidgetBasic')
  },
  {
    path: 'widgetcard',
    name: prop + '.widgetcard',
    meta: { auth: true, name: 'Widget Card' },
    component: () => import('../views/Elements/widget/WidgetCard')
  },
  {
    path: 'widgetchart',
    name: prop + '.widgetchart',
    meta: { auth: true, name: 'Widget Chart' },
    component: () => import('../views/Elements/widget/WidgetChart')
  },
  // Form pages
  {
    path: 'elements',
    name: prop + '.elements',
    meta: { auth: true, name: 'Elements' },
    component: () => import('../views/Elements/Form/Elements')
  },
  {
    path: 'validation',
    name: prop + '.validation',
    meta: { auth: true, name: 'validation' },
    component: () => import('../views/Elements/Form/Validation')
  },
  {
    path: 'wizard',
    name: prop + '.wizard',
    meta: { auth: true, name: 'Wizard' },
    component: () => import('../views/Elements/Form/Wizard')
  },
  // Icons pages
  {
    path: 'dualtone',
    name: prop + '.dualtone',
    meta: { auth: true, name: 'Dual Tone' },
    component: () => import('../views/Elements/Icons/DualTone')
  },
  {
    path: 'outlined',
    name: prop + '.outlined',
    meta: { auth: true, name: 'Outlined' },
    component: () => import('../views/Elements/Icons/Outlined')
  },
  {
    path: 'solid',
    name: prop + '.solid',
    meta: { auth: true, name: 'Solid' },
    component: () => import('../views/Elements/Icons/Solid')
  },
  // Maps pages
  {
    path: 'google',
    name: prop + '.google',
    meta: { auth: true, name: 'Google' },
    component: () => import('../views/Elements/Maps/Google')
  },
  {
    path: 'vector',
    name: prop + '.vector',
    meta: { auth: true, name: 'Vector' },
    component: () => import('../views/Elements/Maps/Vector')
  },
  // Table pages
  {
    path: 'bootstrap-table',
    name: prop + '.bootstraptable',
    meta: { auth: true, name: 'Bootstrap Table' },
    component: () => import('../views/Elements/Table/BootstrapTable')
  },
  {
    path: 'datatable',
    name: prop + '.datatable',
    meta: { auth: true, name: 'Datatable' },
    component: () => import('../views/Elements/Table/Datatable')
  },
  // Footer Pages
  {
    path: 'privacypolicy',
    name: prop + '.privacypolicy',
    meta: { auth: true, name: 'privacypolicy' },
    component: () => import('../views/Elements/Extra/PrivacyPolicy')
  },
  {
    path: 'termsofservice',
    name: prop + '.termsofservice',
    meta: { auth: true, name: 'TermsOfService' },
    component: () => import('../views/Elements/Extra/TermsOfService')
  }
]

const routes = [
  {
    path: '/',
    name: 'default',
    component: () => import('../layouts/default'),
    children: defaultchildRoutes('default')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/simple'),
    children: authchildRoutes('auth')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes

})

export default router
