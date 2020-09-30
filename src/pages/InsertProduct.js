import Axios from 'axios'
import React, { Component } from 'react'
import Swal from 'sweetalert2'

export class InsertProduct extends Component {
    state ={
        images : null
    }

    onSubmitBtnClick = () => {
        let data = {
            name : this.name.value,
            price : this.price.value
        }

        try {
            if(!data.name || !data.price) throw new Error("Name And Price must be filled")
            if(this.state.images === null || this.state.images.length === 0) throw new Error("You must select at least 1 image !!")

            let fd = new FormData()
            data = JSON.stringify(data)

            fd.append('data',data)
            for(var i = 0 ; i < this.state.images.length ; i ++){
                fd.append('images',this.state.images[i])
            }

            Axios.post('http://localhost:5000/products-2',fd)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })



        } catch (error) {
            Swal.fire('Error',error.message,'error')
        }
    }

    onChangeImageHandler = (e) => {
        const files = e.target.files
        console.log(files)
        try {
            if(e.target.files.length > 5) throw new Error("Only 5 Images Allowed")
            for(var i = 0 ; i < files.length ; i ++){
                
                if(files[i].size > 1000000) throw new Error("Maximum Each image only 100kb (" + files[i].name + ') is ' + (files[i].size / 1000) + ' kb')
            }

            this.setState({images : files})

        } catch (error) {
            alert(error.message)
        }
    }
    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='border rounded shadow p-4'>
                        <p>Insert Your Product</p>
                        <input type='text' ref={(el) => this.name = el} placeholder='Product Name' className='form-control mt-3' />
                        <input type='number' placeholder='Product Price' ref={(el) => this.price = el} className='form-control mt-3' />
                        <input type="file" style={{display :"none"}} ref={(el) => this.file = el} multiple="multiple" onChange={this.onChangeImageHandler} accept="image/*"/>
                        <input type='button' onClick={() => this.file.click()} className='btn btn-info mt-3 w-100' value={this.state.images === null || this.state.images.length === 0? 'Upload Product Images' : this.state.images.length + " images selected"} />
                        <input type='button' value='submit' onClick={this.onSubmitBtnClick} className='btn btn-success w-100 mt-4'  />
                    </div>
                </div>
            </div>
        )
    }
}

export default InsertProduct
