import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import { employeesData, customersData, ordersData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Search = () => {
  const { handleUnclick } = useStateContext()
  const [query, setQuery] = useState('')
  const [customers, setCustomers] = useState([])
  const [employees, setEmployees] = useState([])
  const [orders, setOrders] = useState([])

  const getQuerys = async(searchParam) => {
    try {
      const customerRes = customersData.filter((customer) => customer.CustomerName.toLowerCase().includes(searchParam.toLowerCase()))
      const employeeRes = employeesData.filter((employee) => employee.Name.toLowerCase().includes(searchParam.toLowerCase()))
      const orderRes = ordersData.filter((order) => order.OrderItems.toLowerCase().includes(searchParam.toLowerCase()))

      const [customers, employees, orders] = await Promise.all([customerRes, employeeRes, orderRes])
      if(customers.length) setCustomers(customers)
      if(employees.length) setEmployees(employees)
      if(orders.length) setOrders(orders)
    } catch (error) {
      setQuery('')
    }
  }
  
  const handleSearch = (e) => {
    e.preventDefault()

    setQuery(e.target.value)
    getQuerys(e.target.value)
  }
  
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-col items-center bg-transparent py-8 search-backdrop'>
      <div className='h-full w-3/5 md:w-3/4 bg-white dark:bg-secondary-dark-bg border-1 border-color dark:border-white rounded-lg p-4'>
        <div className='flex items-center h-12 mb-16'>
          <input type="text" value={query} onChange={handleSearch} placeholder='Search' className='w-full h-full bg-transparent border-1 border-color dark:border-white rounded-lg px-6 focus:outline-none text-gray-600 dark:text-white' />
          <button type='button' onClick={() => handleUnclick('search')} style={{color: 'rgb(153,171,180)',borderRadius:'50%'}} className='text-xl p-2 m-2 hover:drop-shadow-xl hover:bg-light-gray'>
            <MdOutlineCancel />
          </button>
        </div>

        <div className='h-5/6 border-1 border-color dark:border-white rounded-lg overflow-y-scroll'>
            <div className='p-2'>
              <div className='flex items-center justify-between mb-2 border-b-1 border-color dark:border-white'>
                <p className='text-lg font-semibold text-gray-600 dark:text-white'>Customers</p>
                <p className='text-md text-gray-400 dark:text-white'>Location</p>
              </div>
              {customers && customers.map((customer, index) => (
                <div key={index} className='flex items-center justify-between px-2'>
                  <p className='text-md text-gray-600 dark:text-white'>{customer.CustomerName}</p>
                  <p className='text-sm text-gray-500 dark:text-gray-100'>{customer.Location}</p>
                </div>
              ))}
            </div>
            <div className='p-2'>
              <div className='flex items-center justify-between mb-2 border-b-1 border-color dark:border-white'>
                <p className='text-lg font-semibold text-gray-600 dark:text-white'>Employees</p>
                <p className='text-md text-gray-400 dark:text-white'>Role</p>
              </div>
              {employees && employees.map((employee, index) => (
                <div key={index} className='flex items-center justify-between px-2'>
                  <p className='text-md text-gray-600 dark:text-white'>{employee.Name}</p>
                  <p className='text-sm text-gray-500 dark:text-gray-100'>{employee.Title}</p>
                </div>
              ))}
            </div>
            <div className='p-2'>
              <div className='flex items-center justify-between mb-2 border-b-1 border-color dark:border-white'>
                <p className='text-lg font-semibold text-gray-600 dark:text-white'>Orders</p>
                <p className='text-md text-gray-400 dark:text-white'>Status</p>
              </div>
              {orders && orders.map((order, index) => (
                <div key={index} className='flex items-center justify-between px-2'>
                  <p className='text-md text-gray-600 dark:text-white'>{order.OrderItems}</p>
                  <div className='flex items-center gap-1'>
                    <p className='w-2 h-2 rounded-full' style={{background: order.StatusBg}}></p>
                    <p className='text-sm text-gray-500 dark:text-gray-100 capitalize'>{order.Status}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search