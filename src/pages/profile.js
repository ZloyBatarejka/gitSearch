import React, { useContext, useEffect } from "react";
import { GithubContext } from "../context/github/githubContext";
import { Link } from "react-router-dom";
import { Repos } from "../components/repos";
export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;
  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    //eslint-disable-next-line
  }, []);
  const {
    name,
    login,
    company,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    public_repos,
    public_gists,
    following
  } = user;

  if (loading) {
    return <p className="text-center">Загрузка</p>;
  }
  return (
    <>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>
      <div className="card mb-4 profile ">
        <div className="card-body profile__body">
          <div className="row">
            <div className="col-sm-4 text-center">
              <img className="profile__img" src={avatar_url} alt={name} />
              <h1 className="profile__name">{name}</h1>
              {location && (
                <p className="profile__location">Местоположение: {location}</p>
              )}
            </div>
            <div className="col profile__info d-flex flex-column justify-content-around">
              {bio && (
                <>
                  <p className="profile__bio">BIO: {bio}</p>
                </>
              )}
              <div className="profile__btn">
                <a
                  href={html_url}
                  className="profile__btn btn btn-dark"
                  target="blank"
                  rel="noopener noreferer"
                >
                  Открыть профиль
                </a>
              </div>

              <ul className="profile__list">
                {login && (
                  <li className="profile__item">
                    <strong>Username: {login}</strong>
                  </li>
                )}
                {company && (
                  <li className="profile__item">
                    <strong>Компания: {login}</strong>
                  </li>
                )}
                {blog && (
                  <li className="profile__item">
                    <strong>Website: {blog}</strong>
                  </li>
                )}
              </ul>
              <div className="profile__badges d-flex justify-content-between">
                <div className="badge badge-primary">
                  Подписчики: {followers}
                </div>
                <div className="badge badge-success">Подписан: {following}</div>
                <div className="badge badge-danger">
                  Репозитории: {public_repos}
                </div>
                <div className="badge badge-dark">
                  Подписчики: {public_gists}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};
