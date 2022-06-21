import Customer from '../models/customer.js'

const dataCleaner = {

  cleanCustomer: ( customer ) => {
    return {
      id: customer.CUSTOMER_ID,
      name: customer.CUSTOMER_NAME,
      password: customer.PASSWORD,
      email: customer.EMAIL 
    }
  },  

  cleanCustomers: ( customers ) => {
    var results = []
    for( const c in customers) {
      results.push(dataCleaner.cleanCustomer(customers[c]))
    }
    return results
  }

}

export default dataCleaner