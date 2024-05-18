import React, { useContext, useState, } from 'react'
import SingleProduct from '../components/SingleProduct'
import {Helmet} from "react-helmet";
import { ApiContext } from '../context/ApiContext';
import { LangContext } from '../context/LangContext';

const Products = () => {
    const [data] = useContext(ApiContext);
    const [filterdata,setFilterData] = useState(data);
    const [active,setActive] = useState();
    const filterResult = (catitem)=>{
        const result = data.filter(i=>i.category === catitem);
        setActive(catitem);
        setFilterData(result);
    }
    const [lang]=  useContext(LangContext);
    return (
        <div className='container'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>{lang ==='az'?"Mehsul Siyahisi":"Product list"}</title>
            </Helmet>
            <h1 className='text-center my-5'>{lang ==='az'?"Mehsul Siyahisi":"Product list"}</h1>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3">
                    <ul className="list-group">
                        <li className={`list-group-item ${active==="men's clothing"?"active":""}`} onClick={()=>{filterResult("men's clothing")}}>Men's clothing</li>
                        <li className={`list-group-item ${active==="women's clothing"?"active":""}`} onClick={()=>{filterResult("women's clothing")}}>Women's clothing</li>
                        <li className={`list-group-item ${active==="jewelery"?"active":""}`} onClick={()=>{filterResult("jewelery")}}>Jewelery</li>
                        <li className={`list-group-item ${active==="electronics"?"active":""}`} onClick={()=>{filterResult("electronics")}}>Electronics</li>
                    </ul>

                </div>
                <div className="col-12 col-sm-12 col-md-9">
                    <div className="row g-5">
                        {filterdata.length === 0 ? data.map(item => <SingleProduct alldata={item} key={item.id} />):filterdata.map(item => <SingleProduct alldata={item} key={item.id} />)}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products