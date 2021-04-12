import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {newArticleAction} from '../../store/actions/blogActions'
//img
import bank1 from '../../assets/categories/bank1.jpg';
import {BlogPageCreateStyle} from '../BlogPageCreate/style'
import BlogHeaderComponent from '../../components/BlogHeaderComponent';

const BlogPageCreate =()=>{
    const [article, setNewArticle] = useState({
        title: '',
        content: '',
        article_category: 1,
        article_video: '',
        article_image: []
    });
    const dispatch = useDispatch()
    const history = useHistory()
    const [showConfirmation, setShowConfirmation] = useState(false)

    const articleInputHandler = e => {
        let{name, value}=e.target
        if (name === 'article_category'){
            value = parseInt(value)
        }else if(name === 'article_image'){
            value = []
            for (const image of e.target.files) {
                value.push(image)
            }
        }
        setNewArticle({
            ...article, 
            [name]:value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault()

        const formData = new FormData();
        for (let i in article.article_image) {
            formData.append('article_images', article.article_image[i]);
        }

        formData.append('article_video', article.article_video);
        formData.append('title', article.title);
        formData.append('content', article.content);
        formData.append('article_category', article.article_category);

            
        dispatch(newArticleAction(formData, history))
        setShowConfirmation(true)

        setNewArticle({
            title: '',
            content: '',
            article_category: 1,
            article_video: '',
            article_image: []
        }) 
    }

    const closeHandler = (e) => {
        setShowConfirmation(false);
    };
    
    return(
        
        <BlogPageCreateStyle>
        <BlogHeaderComponent />
            <div className="back-img"></div>
        <div className="article-info">
            <div className="round-pic">
                <div className="blog-img" style={{"backgroundImage": `url(${bank1})`}}></div>
            </div>
            <div className="header-info">
                <p className="category">Your story starts here</p>
                <p className="headline">What is your article about?</p>
                <p className="author"></p>
                { showConfirmation ? 
                        <div id="confirmOverlay">
                            <div id="confirmBox">
                                <h1>Congratulations!</h1>
                                <p>Your article has been published</p>
                                <div id="confirmButtons">
                                    <a className="close-btn" onClick={closeHandler}>close<span></span></a>
                                </div>
                            </div>
                        </div> : null
                    }

                
                <div className="main-content">
                        <form className="form" onSubmit={onSubmitHandler}>
                            <div className="title-inputs">
                                <input className="article-title" onChange={articleInputHandler} value={article.title} name='title' type="text" required placeholder = "Title" />
                                <select className="article-category" onChange={articleInputHandler} value={article.article_category} name="article_category" id="category">
                                    <option value="1">Taxes</option>
                                    <option value="2">Renting</option>
                                    <option value="3">Banking</option>
                                    <option value="4">Insurance</option>
                                </select>
                            </div>
                            <div className="article-box">
                                <textarea name='content' onChange={articleInputHandler} value={article.content} className="article-input" type="text" required placeholder="Let's create...">
                                </textarea>
                            </div>
                            <div className="media-input">
                                <div className="files">
                                    <input className="imageFile" onChange={articleInputHandler} name='article_image' type="file" id="upload"  accept="image/jpeg, image/png" multiple placeholder="Image" />
                                    <input className="videoFile" onChange={articleInputHandler} value={article.article_video}  name='article_video'   type="url" placeholder="Video url" />
                                </div>
                                <button type="submit" className="submit-btn">submit</button>

                            </div>
                    </form> 
                        
                </div>
            </div>
           
        </div>
        </BlogPageCreateStyle>
    )
}
export default BlogPageCreate;
