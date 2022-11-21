import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-6 mx-auto login-container">  
          <div class="card text-center">
            <div class="card-body">
              <img className="img-fluid main-logo" alt="Manyavar Logo" src="https://www.exchange4media.com/news-photo/98693-manyavarf.jpg" />
              <h2 class="card-title mt-3">Manyavar Blah Blah</h2>
              <form className="login-form row mx-auto my-5">
                <div className="col-6 offset-3">
                  <p className="mb-4 text-start">Please login to your account</p>
                </div>
                <div className="row offset-3 col-6">
                    <input type="text" className="col-6 form-control mb-4" id="username" placeholder="Username" />
                    <input type="password" className="col-6 form-control mb-4" id="password" placeholder="Password" />
                    <button class="btn btn-primary btn-block w-100 mb-3" type="button">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div> 
      </div>
    </div>

  );
}

export default App;
