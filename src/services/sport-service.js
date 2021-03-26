import moment from "moment";

export default class SportService {
  constructor() {
    this._api = "https://api.football-data.org/v2";
  }

  async getResource(url) {
    const res = await fetch(`${this._api}${url}`, {
      headers: {
        "X-Auth-Token": process.env.REACT_APP_SPORTS_API_KEY,
      },
    });

    console.log(res);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getTeams = async () => {
    const res = await this.getResource("/teams");
    return res.teams.map(this._transformTeam);
  };

  getTeam = async (id) => {
    const res = await this.getResource(`/teams/${id}`);
    return this._transformTeam(res);
  };

  getMatch = async (id) => {
    const res = await this.getResource(`/teams/${id}/matches`);
    return {
      count: res.count,
      matches: res.matches.map(this._transformMatch),
    };
  };

  getLeagues = async () => {
    const res = await this.getResource("/competitions");
    return res.competitions.map(this._transformLeague);
  };

  getLeague = async (id) => {
    const res = await this.getResource(`/competitions/${id}`);
    return this._transformLeague(res);
  };

  _transformTeam({ id, name, area, founded, venue, clubColors }) {
    return {
      id,
      name,
      area: area.name,
      founded,
      venue,
      colors: clubColors,
    };
  }

  _transformMatch = ({ id, utcDate, status, score, homeTeam, awayTeam }) => {
    return {
      id,
      date: this.convertDate(utcDate),
      status,
      winner: score.winner,
      homeTeam: homeTeam.name,
      awayTeam: awayTeam.name,
    };
  };

  _transformLeague({ id, name, area }) {
    return {
      id,
      name,
      area: area.name,
    };
  }

  convertDate(utcDate) {
    return moment(utcDate).format("DD.MM.YYYY HH:mm");
  }
}
