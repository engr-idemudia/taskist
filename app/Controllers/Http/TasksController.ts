import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'
import { schema, rules} from '@ioc:Adonis/Core/Validator'

export default class TasksController {
    public index ({ view }: HttpContextContract) {
        return view.render('tasks/index')
    }

    public async store ({request, response, session }: HttpContextContract) {
    // const task await Task.create({
        const validationSchema = schema.create({
            title: schema.string({trim: true }, [
                rules.maxLength(20),
            ]),
        })

        const validatedDAta = await request.validate({
            schema: validationSchema,
            messages: {
                'title.required': 'Enter task title',
                'title.maxLength': 'Task title can not exceed 20 character'
            }
        })
        await Task.create({
            // title: request.input('title'),
            title: validatedDAta.title,
        })
         session.flash('notification', 'Task added!')

        return response.redirect('back')  
    }

}
