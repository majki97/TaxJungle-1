import React from 'react';
import Carousel from 'react-elastic-carousel';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import BlogHeaderComponent from '../../components/BlogHeaderComponent';
import BlogCardComponent from './BlogCardComponent';
import BlogNavComponent from './BlogNavComponent';
import {fetchAllArticles} from '../../store/actions/blogActions'

//css
import {BlogOverviewStyle} from '../BlogOverview/styles';

const BlogOverview =()=>{
    const dispatch = useDispatch();
    const articles = useSelector(state => state.blogReducer.articles);
    const category = useSelector(state => state.blogReducer.category);

    useEffect(() => dispatch(fetchAllArticles(category)), [category]);
   
        return(
            <BlogOverviewStyle>
                <div className="upper-header">
                    <h1 className="title">Keen Blog</h1>
                </div>
                    <BlogHeaderComponent />
                    <BlogNavComponent />
                <div className="overall-wrapper">

                {
                    (category === "") ?  
                    (
                        <div className="main-container">
                            <Carousel itemsToShow={3} itemsToScroll={3} enableMouseSwipe={false}> 
                                {
                                    articles.map((article, id) => <BlogCardComponent key={id} article={article}/>)
                                }
                            </Carousel>
                            <div className="back-img"></div>
                        </div>
                    ) : (

                        <div className="category-flexcontainer">
                            {
                                articles.map((article, id) => <BlogCardComponent key={id} article={article}/>)
                            }
                        </div> 
                    )
                }
                </div>
            </BlogOverviewStyle>
            
        )
    
}
export default BlogOverview;
