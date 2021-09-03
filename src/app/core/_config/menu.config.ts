export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Ezefood',
					root: true,
					alignment: 'left',
					page: '/first-page',

				},

			]
				},
		aside: {
			self: {},
			items: [
				{
					title: 'Ezefood',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/first-page',

					bullet: 'dot',
				},
				{
					title: 'System Managment',
					root: true,
					icon: 'flaticon-light',
					submenu:[
						{
					 		title :'Account Managment',
							root:'true',
							bullet:'dot',
							icon:'flaticon-book',
							page:''
						},
						{
							title :'My Profile',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Change Password',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						}
					]
				},
				{section: 'Components'},
				{
					title: 'ٌRestuarants',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',

				},
				{
					title: 'ٌCustomers',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',

				},
				{
					title: 'ٌDrivers',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',

				},
				{
					title: 'ٌOrders',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',

				},
				{
					title: 'ٌExternat Orders',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',

				},
				{
					title: 'ٌCoupons',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',

				},
				{
					title: 'ٌPop Advertisements',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',

				},
				{
					title: 'ٌAdvertisements',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',

				},
				{
					title: 'Reports Managment',
					root: true,
					icon: 'flaticon-light',
					submenu:[
						{
					 		title :'Restaurant invoices',
							root:'true',
							bullet:'dot',
							icon:'flaticon-book',
							page:''
						},
						{
							title :'Order Per Restaurants',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Order Per Payment Method',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Drivers Reports',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Sales Statisticts',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Statisticts Reports',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						}
					]
				},
				{
					title: 'Settings Managment',
					root: true,
					icon: 'flaticon-light',
					submenu:[
						{
					 		title :'App information',
							root:'true',
							bullet:'dot',
							icon:'flaticon-book',
							page:''
						},
						{
							title :'Categories',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Ingrediant Categories',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Option Categories',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'App Versions',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Cities',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'General Settings',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Terms & Conditions',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						},
						{
							title :'Contact Us',
							root:'true',
							bullet:'dot',
							icon:'flaticon2-user',
							page:''
						}
					]
				},
				{
					title: 'ٌMaterails',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Form Controls',
							bullet: 'dot',
							submenu: [
								{
									title: 'Auto Complete',
									page: '/material/form-controls/autocomplete',
									permission: 'accessToECommerceModule'
								},
								{
									title: 'Checkbox',
									page: '/material/form-controls/checkbox'
								},
								{
									title: 'Radio Button',
									page: '/material/form-controls/radiobutton'
								},
								{
									title: 'Datepicker',
									page: '/material/form-controls/datepicker'
								},
								{
									title: 'Form Field',
									page: '/material/form-controls/formfield'
								},
								{
									title: 'Input',
									page: '/material/form-controls/input'
								},
								{
									title: 'Select',
									page: '/material/form-controls/select'
								},
								{
									title: 'Slider',
									page: '/material/form-controls/slider'
								},
								{
									title: 'Slider Toggle',
									page: '/material/form-controls/slidertoggle'
								}
							]
						},
						{
							title: 'Navigation',
							bullet: 'dot',
							submenu: [
								{
									title: 'Menu',
									page: '/material/navigation/menu'
								},
								{
									title: 'Sidenav',
									page: '/material/navigation/sidenav'
								},
								{
									title: 'Toolbar',
									page: '/material/navigation/toolbar'
								}
							]
						},
						{
							title: 'Layout',
							bullet: 'dot',
							submenu: [
								{
									title: 'Card',
									page: '/material/layout/card'
								},
								{
									title: 'Divider',
									page: '/material/layout/divider'
								},
								{
									title: 'Expansion panel',
									page: '/material/layout/expansion-panel'
								},
								{
									title: 'Grid list',
									page: '/material/layout/grid-list'
								},
								{
									title: 'List',
									page: '/material/layout/list'
								},
								{
									title: 'Tabs',
									page: '/material/layout/tabs'
								},
								{
									title: 'Stepper',
									page: '/material/layout/stepper'
								},
								{
									title: 'Default Forms',
									page: '/material/layout/default-forms'
								},
								{
									title: 'Tree',
									page: '/material/layout/tree'
								}
							]
						},
						{
							title: 'Buttons & Indicators',
							bullet: 'dot',
							submenu: [
								{
									title: 'Button',
									page: '/material/buttons-and-indicators/button'
								},
								{
									title: 'Button toggle',
									page: '/material/buttons-and-indicators/button-toggle'
								},
								{
									title: 'Chips',
									page: '/material/buttons-and-indicators/chips'
								},
								{
									title: 'Icon',
									page: '/material/buttons-and-indicators/icon'
								},
								{
									title: 'Progress bar',
									page: '/material/buttons-and-indicators/progress-bar'
								},
								{
									title: 'Progress spinner',
									page: '/material/buttons-and-indicators/progress-spinner'
								},
								{
									title: 'Ripples',
									page: '/material/buttons-and-indicators/ripples'
								}
							]
						},
						{
							title: 'Popups & Modals',
							bullet: 'dot',
							submenu: [
								{
									title: 'Bottom sheet',
									page: '/material/popups-and-modals/bottom-sheet'
								},
								{
									title: 'Dialog',
									page: '/material/popups-and-modals/dialog'
								},
								{
									title: 'Snackbar',
									page: '/material/popups-and-modals/snackbar'
								},
								{
									title: 'Tooltip',
									page: '/material/popups-and-modals/tooltip'
								}
							]
						},
						{
							title: 'Data table',
							bullet: 'dot',
							submenu: [
								{
									title: 'Paginator',
									page: '/material/data-table/paginator'
								},
								{
									title: 'Sort header',
									page: '/material/data-table/sort-header'
								},
								{
									title: 'Table',
									page: '/material/data-table/table'
								}
							]
						}
					]
				},
				{
					title: 'Ng-Bootstrap',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-digital-marketing',
					submenu: [
						{
							title: 'Accordion',
							page: '/ngbootstrap/accordion'
						},
						{
							title: 'Alert',
							page: '/ngbootstrap/alert'
						},
						{
							title: 'Buttons',
							page: '/ngbootstrap/buttons'
						},
						{
							title: 'Carousel',
							page: '/ngbootstrap/carousel'
						},
						{
							title: 'Collapse',
							page: '/ngbootstrap/collapse'
						},
						{
							title: 'Datepicker',
							page: '/ngbootstrap/datepicker'
						},
						{
							title: 'Dropdown',
							page: '/ngbootstrap/dropdown'
						},
						{
							title: 'Modal',
							page: '/ngbootstrap/modal'
						},
						{
							title: 'Pagination',
							page: '/ngbootstrap/pagination'
						},
						{
							title: 'Popover',
							page: '/ngbootstrap/popover'
						},
						{
							title: 'Progressbar',
							page: '/ngbootstrap/progressbar'
						},
						{
							title: 'Rating',
							page: '/ngbootstrap/rating'
						},
						{
							title: 'Tabs',
							page: '/ngbootstrap/tabs'
						},
						{
							title: 'Timepicker',
							page: '/ngbootstrap/timepicker'
						},
						{
							title: 'Tooltips',
							page: '/ngbootstrap/tooltip'
						},
						{
							title: 'Typehead',
							page: '/ngbootstrap/typehead'
						}
					]
				},
				{section: 'Applications'},
				{
					title: 'eCommerce',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					permission: 'accessToECommerceModule',
					submenu: [
						{
							title: 'Customers',
							page: '/ecommerce/customers'
						},
						{
							title: 'Products',
							page: '/ecommerce/products'
						},
					]
				},
				{
					title: 'User Management',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Users',
							page: '/user-management/users'
						},
						{
							title: 'Roles',
							page: '/user-management/roles'
						}
					]
				},
				{section: 'Custom'},
				{
					title: 'Error Pages',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					submenu: [
						{
							title: 'Error 1',
							page: '/error/error-v1'
						},
						{
							title: 'Error 2',
							page: '/error/error-v2'
						},
						{
							title: 'Error 3',
							page: '/error/error-v3'
						},
						{
							title: 'Error 4',
							page: '/error/error-v4'
						},
						{
							title: 'Error 5',
							page: '/error/error-v5'
						},
						{
							title: 'Error 6',
							page: '/error/error-v6'
						},
					]
				},
				{
					title: 'Wizard',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-mail-1',
					submenu: [
						{
							title: 'Wizard 1',
							page: '/wizard/wizard-1'
						},
						{
							title: 'Wizard 2',
							page: '/wizard/wizard-2'
						},
						{
							title: 'Wizard 3',
							page: '/wizard/wizard-3'
						},
						{
							title: 'Wizard 4',
							page: '/wizard/wizard-4'
						},
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
