import React from "react";
export const Repos = ({ repos }) => (
  <>
    {repos.map(repo => (
      <div className="repo card mb-3" key={repo.id}>
        <div className="repo__body card-body">
          <h5>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h5>
        </div>
      </div>
    ))}
  </>
);
