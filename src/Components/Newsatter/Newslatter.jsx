import  { Component } from "react";
// import './Style.css'
export default class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false
    };
  }

  handleChange(value) {
    this.setState({
      email: value,
      error: false
    });
  }

  handleSubmit() {
    const { email } = this.state;
    const error = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
      email
    );

    if (error) {
      this.setState({ error });
    } else {
      console.log(email);
    }
  }

  render() {
    const { email, error } = this.state;

    return (
      <div className="w-full h-auto text-center py-20">
        <section className="py-10">
          <h1 className="text-[2vmax] font-medium mb-6">Signup to Newsletter</h1>        

          <div>
            <input
              className={error ? "py-3 px-12 rounded-xl border-2 border-red-500" : "py-3 px-12 border-2 border-black placeholder:text-black rounded-xl"}
              type="text"
              placeholder="Your email"
              value={email}
              onChange={e => {
                this.handleChange(e.target.value);
              }}
              required
            />
            <br />
            <button className="rounded-lg bg-blue-500 py-2 px-8 text-xl font-medium my-3"
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </section>
       </div>
    );
  }
}
