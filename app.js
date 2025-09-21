const company = {
    name: "TechNova Solutions",
    headquarters: "Tbilisi",
    departments: {
        development: {
            manager: "Nino Beridze",
            teams: [
                {
                    teamName: "Frontend",
                    members: [
                        { name: "Nika", role: "Developer", salary: 2000, projects: ["Website Redesign", "Landing Page"] },
                        { name: "Ana", role: "Intern", salary: 800, projects: ["Landing Page"] }
                    ]
                },
                {
                    teamName: "Backend",
                    members: [
                        { name: "Luka", role: "Developer", salary: 2200, projects: ["API System", "Database Migration"] },
                        { name: "Mariam", role: "Lead Developer", salary: 3000, projects: ["API System"] }
                    ]
                }
            ]
        },
        marketing: {
            manager: "Giorgi Mchedlidze",
            teams: [
                {
                    teamName: "Digital Marketing",
                    members: [
                        { name: "Dato", role: "SEO Specialist", salary: 1500, projects: ["Google Ads", "SEO Audit"] },
                        { name: "Salome", role: "Content Creator", salary: 1300, projects: ["Blog Posts", "Email Campaign"] }
                    ]
                }
            ]
        }
    }
};


// Print the company name in uppercase and the headquarters in lowercase.

console.log(company.name.toUpperCase())
console.log(company.headquarters.toLowerCase())

// Loop through all departments using for...in.
// Print the department name (uppercase) and the manager’s name.
// Inside each department, loop through all teams using a for loop.
// Print the team name in uppercase.
// For each member in a team:
// Print their name in uppercase and their role in lowercase.
// Use a ternary operator to check if salary ≥ 2000 → "High Salary" else "Low Salary".
// Print all the projects each member is working on (loop through the projects array).



for (let department in company.departments) {
    //ცალკე იმიტო ვქმნი ცვლადს რომ კომპანიის "შვილობილია" დეპარტამენტები და ამ დეპარტამენტების ზუსტად რომელზე ვარ იმას ვიგებ. ანუ "i" რო გვაქ ეგეთია(უხეში შედარებაა, მაგრამ ანუ იმ ობიექტში კონკრეტულს მივმართავთ.)
    const depart = company.departments[department]
    console.log("department: " , department.toUpperCase())
    console.log("managers's name: ", depart.manager)
    // console.log("managers's name: ", company.departments.development.manager) //ასეც შეიძლება ცვლადის შემოტანის გარეშე


    for (let i = 0; i < depart.teams.length; i++) {
        const team = depart.teams[i]
        console.log(team.teamName.toUpperCase())

        for (let j = 0; j < team.members.length; j++) { //სხვანაირად ვერ ვქენი. ჩადგმული ციკლით გავაკეთე. გარეთ შევეცადე გამეტანა ცალკე, მაგრამ კოდიც წასაკითხად რთული იქნებობა, რადგან თავიდან უნდა შემომეტანა ცვლადები.
            const member = team.members[j]
            console.log(member.name.toUpperCase())
            console.log(member.role.toLowerCase())

            const salaryCheck = member.salary >= 2000 ? "High Salary" : "Low Salary"
            console.log(salaryCheck)

             for (let p = 0; p < member.projects.length; p++) {
                console.log(member.projects[p])
            }
        }
    }
}
