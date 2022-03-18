 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

export default class PagesController {
    public home ({ view }: HttpContextContract){
        return view.render('tasks/index')
    }
    // public about ({ view}: HttpContextContract){
    //     // return params.name ? `This is ${params.name}'s about page` : 'This is the normal about page'
    //     return view.render('about')
    // }
    public about ({ view, params}: HttpContextContract){
        const name = params.name

        return view.render('about', {name: name}) //ES-2015 above use just {name}
    }

    public contact ({ view }: HttpContextContract){
        // return 'This is the contact page'
        return view.render('contact') 
    }
}

