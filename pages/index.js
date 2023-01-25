import styles from "./index.module.scss";

import Image from "next/image";
import { useState } from "react";

const Home = () => {
	const [question, setQuestion] = useState("What is The Minimalist Entrepreneur about?");
	const [answer, setAnswer] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setAnswer(question);
	};

	return (
		<div>
			<header className={styles.pageHeader}>
				<Image
					className={styles.bookCoverImage}
					src={"https://askmybook.com/static/book.2a513df7cb86.png"}
					alt={"Cover of The Minimalist Entrepreneur by Sahil Lavingia"}
					width={600}
					height={882}
				/>
				<h1 className={styles.pageTitle}>Ask My Book</h1>
			</header>
			<div className={styles.pageBody}>
				<p className={styles.paragraphText}>This is an experiment in using AI to make the content from the book &quot;The Minimalist Entrepreneur&quot; by Sahil Lavingia more accessible. Ask a question and AI&apos;ll answer it in real-time:</p>

				<form className={styles.pageForm} onSubmit={handleSubmit}>
					<textarea
						className={styles.questionTextArea}
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
					{!!answer &&
						<div className={styles.answerSection}>Answer: {answer}</div>
					}

					<div className={styles.buttonSection}>
						<button
							className={`${styles.button} ${styles.askButton}`}
							type="submit"
						>
							Ask question
						</button>

						<button className={styles.button}>I&apos;m feeling lucky</button>
					</div>
				</form>

				<a href={"github.com"} className={styles.paragraphText}>Github</a>
			</div>
		</div>
	);
};

export default Home;
