import Axios from 'axios'
import React, { Component } from 'react'

export class ShowProducts extends Component {
    state = {
        dataProduct : {
            data : null,
            status : 'unloaded'
        },

        dataSelected : [],

        imageSelectedEdit : null
    }
    componentDidMount(){
        this.getData()
    }
    getData = () => {
        this.setState({dataProduct : {...this.state.dataProduct, status : 'loading'}})
        Axios.get('http://localhost:5000/products')
        .then((res) => {
            console.log(res.data.data)
            let dataSelected = []
            res.data.data.forEach((val,index) => {
                dataSelected[index] = val.images[0]
            })

            console.log(dataSelected)

            this.setState({dataProduct : {status : "loaded",data : res.data.data}, dataSelected : dataSelected })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    onChangeImageInput = (e) => {
        
        
    }
    renderDataToJsx = () => {
        return this.state.dataProduct.data.map((val,idx) => {
            return(
                <div className='col-md-4 mt-5'>
                    <div className='border rounded shadow p-4'>
                        <h3 className='text-secondary'>{val.name}</h3>
                        <p className='text-danger'>Rp. {val.price}</p>

                        <div style={{position : 'relative'}}>
                            <img style={{width : "100%" ,height : '200px' , objectFit : "cover" , objectPosition: "center"}} alt='product' src={this.state.dataSelected[idx].path} />
                            <div style={{position : "absolute",left :"0px",bottom : "0px" }} className='w-100 text-center'>
                                <input type='button' style={{fontSize : '10px'}} onClick={() => this.inputFile.click()} className='btn btn-warning' value='Edit Image' />
                                <input type='file' style={{display : "none"}} ref={(el) => this.inputFile = el} accept="image/*" onChange={this.onChangeImageInput} />
                            </div>
                        </div>
                        
                        <div className='row mt-4'>
                            {
                                val.images.map((img) => {
                                    if(img.id === this.state.dataSelected[idx].id){
                                        return(
                                            <div className='col-4'>
                                                <img style={{width : "100%" ,height : '50px' , objectFit : "cover" , objectPosition: "center",border : "2px solid red",cursor : "pointer"}} alt='product' src={img.path} />
                                            </div>
                                        )
                                    }
                                    return(
                                        <div className='col-4'>
                                            <img style={{width : "100%" ,height : '50px' , objectFit : "cover" , objectPosition: "center" , cursor : "pointer"}} alt='product' src={img.path} 
                                            onClick={() => {
                                                let dataSelected = this.state.dataSelected
                                                dataSelected[idx] = img
                                                this.setState({dataSelected : dataSelected})
                                            }} />
                                        </div>

                                    )
                                })
                            }                            
                        </div>
                        <div className='mt-3'>
                            <input type='button' className='btn btn-info w-50' value='edit' />
                            <input type='button' className='btn btn-danger w-50' value='delete' />
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if(this.state.dataProduct.status === 'loading'){
            return (
                <p className='text-center'>
                    loading ...
                </p>
            )
        }

        if(this.state.dataProduct.status === 'loaded' && this.state.dataProduct.data.length === 0){
            return (
                <p className='text-center'>
                    Data Empty
                </p>
            )
        }

        if(this.state.dataProduct.status === 'loaded' && this.state.dataProduct.data.length > 0 && this.state.dataSelected.length > 0){
            return (
                <div className='container'>
                   <div className='row'>
                       {this.renderDataToJsx()}  
                   </div>
                </div>
            )
        }

        return(
            <p className='text-center'>default loading ..</p>
        )
    }
}

export default ShowProducts



// {id_product: 1, name: "Sepatu Nike Air Jordan 1 klasics AJ 1 retro", price: 1600000, id_image: 1, image: "http://localhost:5000/storage/IMG-1601436032722952.5439071970259.jpeg"}
// 1: {id_product: 1, name: "Sepatu Nike Air Jordan 1 klasics AJ 1 retro", price: 1600000, id_image: 2, image: "http://localhost:5000/storage/IMG-1601436032724633.7212641597685.jpeg"}
// 2: {id_product: 1, name: "Sepatu Nike Air Jordan 1 klasics AJ 1 retro", price: 1600000, id_image: 3, image: "http://localhost:5000/storage/IMG-1601436032725434.1879183279842.jpeg"}
// 3: {id_product: 2, name: "sepatu sport casual running pria santai", price: 120000, id_image: 4, image: "http://localhost:5000/storage/IMG-1601436210576429.889500767533.jpeg"}
// 4: {id_product: 2, name: "sepatu sport casual running pria santai", price: 120000, id_image: 5, image: "http://localhost:5000/storage/IMG-1601436210577165.02468426598327.jpeg"}
// 5: {id_product: 3, name: "NIKE AIR MAX 270 REACT BAUHAUS", price: 1200000, id_image: 6, image: "http://localhost:5000/storage/IMG-1601436310499139.24555834007245.jpeg"}
// 6: {id_product: 3, name: "NIKE AIR MAX 270 REACT BAUHAUS", price: 1200000, id_image: 7, image: "http://localhost:5000/storage/IMG-1601436310499265.06963849721177.jpeg"}
// 7: {id_product: 3, name: "NIKE AIR MAX 270 REACT BAUHAUS", price: 1200000, id_image: 8, image: "http://localhost:5000/storage/IMG-1601436310500856.5424360430072.jpeg"}
// 8: {id_product: 4, name: "Adidas Ultraboost Grey Silver Medal", price: 1750000, id_image: 9, image: "http://localhost:5000/storage/IMG-1601436378813448.21940834488515.jpeg"}
// 9: {id_product: 4, name: "Adidas Ultraboost Grey Silver Medal", price: 1750000, id_image: 10, image: "http://localhost:5000/storage/IMG-1601436378815407.01946699645754.jpeg"}
// 10: {id_product: 5, name: "Ultraboost 20 - Adidas Ultraboost 20 RED", price: 2000000, id_image: 11, image: "http://localhost:5000/storage/IMG-1601436444366958.7136431994226.jpeg"}
// 11: {id_product: 5, name: "Ultraboost 20 - Adidas Ultraboost 20 RED", price: 2000000, id_image: 12, image: "http://localhost:5000/storage/IMG-1601436444367542.5355545012201.jpeg"}
// 12: {id_product: 5, name: "Ultraboost 20 - Adidas Ultraboost 20 RED", price: 2000000, id_image: 13, image: "http://localhost:5000/storage/IMG-1601436444368201.14198930224725.jpeg"}



