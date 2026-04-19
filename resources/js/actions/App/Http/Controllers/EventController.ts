import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EventController::show
* @see app/Http/Controllers/EventController.php:9
* @route '/event/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/event/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventController::show
* @see app/Http/Controllers/EventController.php:9
* @route '/event/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventController::show
* @see app/Http/Controllers/EventController.php:9
* @route '/event/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::show
* @see app/Http/Controllers/EventController.php:9
* @route '/event/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EventController::show
* @see app/Http/Controllers/EventController.php:9
* @route '/event/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::show
* @see app/Http/Controllers/EventController.php:9
* @route '/event/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::show
* @see app/Http/Controllers/EventController.php:9
* @route '/event/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\EventController::checkout
* @see app/Http/Controllers/EventController.php:14
* @route '/checkout'
*/
export const checkout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkout.url(options),
    method: 'get',
})

checkout.definition = {
    methods: ["get","head"],
    url: '/checkout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventController::checkout
* @see app/Http/Controllers/EventController.php:14
* @route '/checkout'
*/
checkout.url = (options?: RouteQueryOptions) => {
    return checkout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventController::checkout
* @see app/Http/Controllers/EventController.php:14
* @route '/checkout'
*/
checkout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkout.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::checkout
* @see app/Http/Controllers/EventController.php:14
* @route '/checkout'
*/
checkout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checkout.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EventController::checkout
* @see app/Http/Controllers/EventController.php:14
* @route '/checkout'
*/
const checkoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkout.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::checkout
* @see app/Http/Controllers/EventController.php:14
* @route '/checkout'
*/
checkoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkout.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::checkout
* @see app/Http/Controllers/EventController.php:14
* @route '/checkout'
*/
checkoutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkout.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

checkout.form = checkoutForm

/**
* @see \App\Http\Controllers\EventController::ticket
* @see app/Http/Controllers/EventController.php:0
* @route '/ticket'
*/
export const ticket = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ticket.url(options),
    method: 'get',
})

ticket.definition = {
    methods: ["get","head"],
    url: '/ticket',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventController::ticket
* @see app/Http/Controllers/EventController.php:0
* @route '/ticket'
*/
ticket.url = (options?: RouteQueryOptions) => {
    return ticket.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventController::ticket
* @see app/Http/Controllers/EventController.php:0
* @route '/ticket'
*/
ticket.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ticket.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::ticket
* @see app/Http/Controllers/EventController.php:0
* @route '/ticket'
*/
ticket.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ticket.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EventController::ticket
* @see app/Http/Controllers/EventController.php:0
* @route '/ticket'
*/
const ticketForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ticket.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::ticket
* @see app/Http/Controllers/EventController.php:0
* @route '/ticket'
*/
ticketForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ticket.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventController::ticket
* @see app/Http/Controllers/EventController.php:0
* @route '/ticket'
*/
ticketForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ticket.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ticket.form = ticketForm

const EventController = { show, checkout, ticket }

export default EventController