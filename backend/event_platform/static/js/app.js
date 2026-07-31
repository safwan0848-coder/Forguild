// Mock Data

const MOCK_EVENTS = [
    {
        id: 1,
        title: "Global AI Hackathon 2026",
        date: "April 15-17, 2026",
        location: "Online",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
        tags: ["AI", "Machine Learning"],
        participants: 1250,
        prize: "$50,000"
    },
    {
        id: 2,
        title: "FinTech Innovators Build",
        date: "May 2-4, 2026",
        location: "New York / Hybrid",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        tags: ["Finance", "Blockchain"],
        participants: 800,
        prize: "$25,000"
    },
    {
        id: 3,
        title: "Sustainable Tech Jam",
        date: "June 10-12, 2026",
        location: "San Francisco",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80",
        tags: ["Green Tech", "IoT"],
        participants: 450,
        prize: "$10,000"
    }
];

const MOCK_TEAMS = [
    {
        id: 1,
        name: "Neural Ninjas",
        event: "Global AI Hackathon 2026",
        lookingFor: ["Frontend", "UX Designer"],
        size: 2,
        maxSize: 4
    },
    {
        id: 2,
        name: "Block Builders",
        event: "FinTech Innovators Build",
        lookingFor: ["Smart Contract Dev"],
        size: 3,
        maxSize: 4
    }
];

// App Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // Render events if the container exists
    const eventsContainer = document.getElementById('events-container');
    if (eventsContainer) {
        renderEvents(MOCK_EVENTS, eventsContainer);
    }

    // Render teams if the container exists
    const teamsContainer = document.getElementById('teams-container');
    if (teamsContainer) {
        renderTeams(MOCK_TEAMS, teamsContainer);
    }

    // Search functionality
    const searchInput = document.getElementById('event-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = MOCK_EVENTS.filter(event => 
                event.title.toLowerCase().includes(query) || 
                event.tags.some(tag => tag.toLowerCase().includes(query))
            );
            renderEvents(filtered, eventsContainer);
        });
    }
    
    // Global Save/Unsave event listener (Event Delegation)
    document.body.addEventListener('click', (e) => {
        if(e.target.closest('.save-evt-btn')) {
            e.preventDefault();
            const btn = e.target.closest('.save-evt-btn');
            const icon = btn.querySelector('i');
            
            if(icon.classList.contains('bi-bookmark')) {
                icon.classList.remove('bi-bookmark');
                icon.classList.add('bi-bookmark-fill', 'text-violet');
                alert('Event saved successfully!');
            } else {
                icon.classList.remove('bi-bookmark-fill', 'text-violet');
                icon.classList.add('bi-bookmark');
                alert('Event removed from saved list.');
            }
        }
    });
});

function renderEvents(events, container) {
    if(events.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-5"><h5 class="text-muted">No events found.</h5></div>`;
        return;
    }

    container.innerHTML = events.map(event => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge badge-violet rounded-pill">${event.tags[0]}</span>
                        <button class="btn btn-sm btn-light save-evt-btn" title="Save Event">
                            <i class="bi bi-bookmark fs-5"></i>
                        </button>
                    </div>
                    <h5 class="card-title text-truncate" title="${event.title}">${event.title}</h5>
                    <p class="card-text text-muted small mb-1">
                        <i class="bi bi-calendar3 me-1 text-violet"></i> ${event.date}
                    </p>
                    <p class="card-text text-muted small mb-3">
                        <i class="bi bi-geo-alt me-1 text-violet"></i> ${event.location}
                    </p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <span class="small fw-bold text-gold"><i class="bi bi-trophy me-1"></i> ${event.prize}</span>
                        <a href="event-details.html" class="btn btn-sm btn-outline-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTeams(teams, container) {
    if(teams.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-5"><h5 class="text-muted">No teams looking for members.</h5></div>`;
        return;
    }

    container.innerHTML = teams.map(team => `
        <div class="col-md-6 mb-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start border-bottom pb-2 mb-3">
                        <div>
                            <h5 class="card-title mb-1">${team.name}</h5>
                            <p class="small text-muted mb-0">For: ${team.event}</p>
                        </div>
                        <span class="badge bg-light text-dark border">${team.size}/${team.maxSize} Members</span>
                    </div>
                    <p class="small fw-bold mb-1">Looking for:</p>
                    <div class="mb-3">
                        ${team.lookingFor.map(role => `<span class="badge badge-gold me-1">${role}</span>`).join('')}
                    </div>
                    <button class="btn btn-sm btn-primary w-100" onclick="alert('Join request sent to ${team.name}!')">Ask to Join</button>
                </div>
            </div>
        </div>
    `).join('');
}
