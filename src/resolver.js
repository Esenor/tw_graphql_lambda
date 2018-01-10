const customerModel = require('./customerModel')

module.exports = {
  Query: {
    /**
     * Return all customers
     * @return {[Customer]}
     */
    getCustomers: () => {
      return customerModel.getAllCustomers()
    }
  },
  Mutation: {
    /**
     * Add a customer to database
     * @return {string}
     */
    addCustomer: (object, data, context) => {
      return customerModel.addCustomer(data.customer.name, data.customer.lastName, data.customer.mail)
    }
  }
}