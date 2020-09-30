import React, { Component } from 'react'

export class ShowProducts extends Component {
    render() {
        return (
            <div className='container'>
               <div className='row'>
                   <div className='col-md-4'>
                       <div className='border rounded shadow p-4'>
                            <h3 className='text-secondary'>Product Name</h3>
                            <p className='text-danger'>Rp. 10000000</p>

                            <img style={{width : "100%" ,height : '200px' , objectFit : "cover" , objectPosition: "center"}} alt='product' src='http://localhost:5000/storage/IMG-1601436032725434.1879183279842.jpeg' />
                            <div className='row mt-4'>
                                <div className='col-4'>
                                    <img style={{width : "100%" ,height : '50px' , objectFit : "cover" , objectPosition: "center"}} alt='product' src='http://localhost:5000/storage/IMG-1601436032725434.1879183279842.jpeg' />
                                </div>
                                <div className='col-4'>
                                    <img style={{width : "100%" ,height : '50px' , objectFit : "cover" , objectPosition: "center"}} alt='product' src='http://localhost:5000/storage/IMG-1601436032725434.1879183279842.jpeg' />

                                </div>
                                <div className='col-4'>
                                    <img style={{width : "100%" ,height : '50px' , objectFit : "cover" , objectPosition: "center"}} alt='product' src='http://localhost:5000/storage/IMG-1601436032725434.1879183279842.jpeg' />

                                </div>
                                
                            </div>
                       </div>
                   </div>
                   
               </div>
            </div>
        )
    }
}

export default ShowProducts
