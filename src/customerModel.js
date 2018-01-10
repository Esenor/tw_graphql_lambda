let customersData = []

module.exports = {
  /**
   * Add a customer
   * @param {string} name
   * @param {string} lastName
   * @param {string} mail
   * @return {string}
   */
  addCustomer: (name, lastName, mail) => {
    customersData.push({
      id: `${Math.floor((Math.random() * 1000) + 1)}`,
      name: name,
      lastName: lastName,
      mail: mail
    })
    return `customer ${mail} added`
  },
  /**
   * return all customers
   * @returns {[Object]}
   */
  getAllCustomers: () => {
    return customersData
  }
}
