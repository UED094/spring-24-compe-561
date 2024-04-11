const Support = () => {
    return (
        <>
            <main className="container">
                <section className="support">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions, feedback, or need assistance,
                        please don&apos;t hesitate to get in touch with us.
                    </p>

                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                        ></textarea>

                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                </section>

                <section className="faq">
                    <h2>Frequently Asked Questions</h2>
                    <ul>
                        <li>
                            <h3>How do I create an account?</h3>
                            <p>Account creation instructions go here...</p>
                        </li>
                        <li>
                            <h3>What should I do if I forget my password?</h3>
                            <p>Password reset instructions go here...</p>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
};
export default Support;
