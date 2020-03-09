'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  points () {
    return this
      .belongsToMany('App/Models/Pontuation')
      .pivotTable('user_points')
      .withPivot(['created_at'])
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }
}

module.exports = User
