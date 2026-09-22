export const GIVING_BENEFICIARY = {
  name: "ALETHEIA - TRUTH REVEALED MINISTRIES",
  copyValue: "ALETHEIA- TRUTH REVEALED MINISTRIES",
};

export const INTERNATIONAL_ACCOUNTS = {
  bank: "Bank of America",
  subtitle: "USD & Devises étrangères",
  accounts: [
    {
      id: "bofa-usd",
      label: "Bank of America (USD)",
      badge: "Devise : USD",
      accountNumber: "488 138 549 770",
      copyAccount: "488138549770",
      swift: "BOFAUS3N",
      copySwift: "BOFAUS3N",
      address: "222 Broadway, New York, NY 10038",
    },
    {
      id: "bofa-foreign",
      label: "Bank of America (Devises)",
      badge: "Autres Devises",
      swift: "BOFAUS6S",
      copySwift: "BOFAUS6S",
      address: "555 California St, San Francisco, CA 94104",
    },
  ],
};

export const LOCAL_ACCOUNTS = {
  title: "Comptes Locaux & Mobile Money",
  subtitle: "Bancobu, CRDB Bank, Lumicash (Burundi)",
  banks: [
    {
      name: "BANCOBU",
      badge: "Banque burundaise",
      accounts: [
        {
          id: "bancobu-fbu",
          type: "Compte FBU",
          number: "24117720101-87",
          copyValue: "24117720101-87",
        },
        {
          id: "bancobu-usd",
          type: "Compte USD",
          number: "24117720201-78",
          copyValue: "24117720201-78",
        },
        {
          id: "bancobu-enoti",
          type: "Compte Enoti",
          number: "4117720102-84",
          copyValue: "4117720102-84",
        },
      ],
    },
    {
      name: "CRDB BANK",
      badge: "Banque",
      accounts: [
        {
          id: "crdb-acc",
          type: "Nº de compte",
          number: "0150 801 212 000",
          copyValue: "0150801212000",
        },
      ],
    },
    {
      name: "LUMICASH (Mobile Money)",
      badge: "Code Marchand",
      accounts: [
        {
          id: "lumicash-code",
          type: "Code Marchand",
          number: "87 986",
          copyValue: "87986",
        },
      ],
    },
  ],
};
