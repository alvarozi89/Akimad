import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import Header from "../Header";
import Form from "../Form";
import RepoList from "../RepoList";



class App extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false
  };

  changeUser = user => {
    this.setState({ user });
  };

  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      console.log(repos);
      if(repos.length>0)
      {
        this.setState({ repos, error: "", loading: false });

      Swal.fire({
              
        icon: 'success',
        title: "Encontrado exitosamente!",
        showConfirmButton: false,
         timer: 1500
           })

      }

      else if(repos.length===0){

        Swal.fire({
              
          icon: 'error',
          title: "Usuario no encontrado",
          showConfirmButton: false,
           timer: 1500
             })

             this.setState({
        
              error: "Usuario no encontrado",
              repos: [],
              loading: false
            });

      }

      
    } catch (error) {
      this.setState({
        
        error: "Usuario no encontrado",
        repos: [],
        loading: false
      });

      Swal.fire({
              
        icon: 'error',
        title: "Usuario no encontrado",
        showConfirmButton: false,
         timer: 1500
           })
    }
  };

  render() {
    const { user, repos, error, loading } = this.state;

    return (
      <div className="App">
        <Header />
        <Form
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
        />
        <RepoList repos={repos} />
      </div>
    );
  }
}

export default App;
