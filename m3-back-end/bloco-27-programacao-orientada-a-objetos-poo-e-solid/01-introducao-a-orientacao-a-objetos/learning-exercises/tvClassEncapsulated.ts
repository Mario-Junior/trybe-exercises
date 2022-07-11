class TvEncapsulated {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn(): void {
    console.log(`
      TV ${this._brand} - ${this._size}"
      Resolution: ${this._resolution}
      Connections: ${this._connections}`
    );
  }

  get connected(): string {
    return this._connectedTo as string;
  }

  set connected(connection: string) {
    if(this._connections.includes(connection)) {
      this._connectedTo = connection;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
};

const tv2 = new TvEncapsulated('LG', 65, '8K', ['HDMI', 'Ethernet', 'Game controller', 'Wi-Fi']);
tv2.turnOn();

// teste: conexão existente possível
tv2.connected = 'HDMI';
console.log('Connected to: ', tv2.connected);

// teste: conexão inexistente
tv2.connected = 'ChromeCast';
console.log('Connected to: ', tv2.connected);
