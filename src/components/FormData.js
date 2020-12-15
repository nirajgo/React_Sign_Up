import React, { useState } from 'react';
import DataService from '../services/service';

const NewsAdd = () => {
	const initialNewsState = {
		//id: null,
		c_id: null,
		u_id: null,
		cat_id: null,
		title: '',
		content: '',
		image: '',
		extract: '',
		read: null,

		published: false,
	};
	const [file, setFile] = useState('');
	const [filename, setFilename] = useState('');
	const [news, setNews] = useState(initialNewsState);
	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNews({ ...news, [name]: value });
	};

	const onChange = (event) => {
		setFile(event.target.files[0]);
		setFilename(event.target.files[0].name);
	};

	const saveNews = () => {
		let formdata = new FormData();
		formdata.append('c_id', 1);
		formdata.append('u_id', 1);
		formdata.append('cat_id', 1);
		formdata.append('title', news.title);
		formdata.append('content', news.content);
		formdata.append('image', filename);
		formdata.append('file', file);
		formdata.append('extract', news.extract);
		formdata.append('read', 1);
		formdata.append('published', false);
		// var data = {
		//   c_id: 1,
		//   u_id: 1,
		//   cat_id: 1,
		//   title: news.title,
		//   content: news.content,
		//   image: news.image,
		//   extract: news.extract,
		//   read: 1,
		//   published: false,
		// };

		DataService.createNews(formdata)
			.then((response) => {
				setNews({
					n_id: response.data.id,
					c_id: 1,
					u_id: 1,
					cat_id: 1,
					title: response.data.title,
					content: response.data.content,
					image: response.data.image,
					extract: response.data.extract,
					read: 1,
					published: response.data.published,
				});
				setSubmitted(true);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const newNews = () => {
		setNews(initialNewsState);
		setSubmitted(false);
	};

	return (
		<div className='submit-form'>
			{submitted ? (
				<div>
					<h4>You submitted successfully!</h4>
					<button className='btn btn-success' onClick={newNews}>
						Add
					</button>
				</div>
			) : (
				<div>
					<div className='form-group'>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							className='form-control'
							id='title'
							required
							value={news.title}
							onChange={handleInputChange}
							name='title'
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='title'>Content</label>
						<input
							type='text'
							className='form-control'
							id='content'
							required
							value={news.content}
							onChange={handleInputChange}
							name='content'
						/>
					</div>

					{/* <div className="form-group">
            <label htmlFor="title">Content</label>
            <input
              type="text"
              className="form-control"
              //rows="10"
              //maxlength="450"
              id="content"
              required
              value={news.content}
              onChange={handleInputChange}
              name="content"
            />
          </div> */}

					<div className='form-group'>
						<label htmlFor='description'>Image</label>
						<input
							type='file'
							className='form-control'
							id='image'
							required
							value={news.image}
							onChange={onChange}
							name='image'
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='description'>Extract</label>
						<input
							type='text'
							className='form-control'
							id='extract'
							required
							value={news.extract}
							onChange={handleInputChange}
							name='extract'
						/>
					</div>

					<button onClick={saveNews} className='btn btn-success'>
						Submit
					</button>
				</div>
			)}
		</div>
	);
};

export default NewsAdd;
