import React, { Component } from 'react'

export class InsertProduct extends Component {
    state ={
        images : null
    }

    onChangeImageHandler = (e) => {
        const files = e.target.files
        console.log(files)
        try {
            if(e.target.files.length > 5) throw new Error("Only 5 Images Allowed")
            for(var i = 0 ; i < files.length ; i ++){
                
                if(files[i].size > 100000) throw new Error("Maximum Each image only 100kb (" + files[i].name + ') is ' + (files[i].size / 1000) + ' kb')
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
                        <input type='text' placeholder='Product Name' className='form-control mt-3' />
                        <input type='number' placeholder='Product Price' className='form-control mt-3' />
                        <input type="file" style={{display :"none"}} ref={(el) => this.file = el} multiple="multiple" onChange={this.onChangeImageHandler} accept="image/*"/>
                        <input type='button' onClick={() => this.file.click()} className='btn btn-info mt-3 w-100' value={this.state.images === null ? 'Upload Product Images' : this.state.images.length + " images selected"} />
                        <input type='button' value='submit' className='btn btn-success w-100 mt-4'  />
                    </div>
                </div>
            </div>
        )
    }
}

export default InsertProduct
